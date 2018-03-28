import React from 'react';
import { connect } from 'react-redux';
import {
  SetSelectedQuote,
  GetAvailableQuotes,
} from '../../reducers/build-policy';
import Images from '../../utils/images';

import './slider.css';
import './radio.css';
import TermSidePanel from './term-side-panel.js';
import PermSidePanel from './perm-side-panel.js';

import {
  SetCoverageAmount,
  SetCoverageTerm,
} from '../../reducers/build-policy';

import {
  Container,
  HeadingContainer,
  HeadingTextStyle,
  Line,
  MainContainer,
  QuoteContainer,
  ContinueButton,
  Button1,
  Button2Text,
  QuoteMessage,
  QuoteTopSection,
  PriceStyle,
  PriceSection,
  Badge,
  QuoteSectionContainer,
  QuoteStyle,
  LogoStyle,
  TextStyle7,
  TextStyle8,
  TextStyle9,
  TextStyle10,
  TextStyle11,
  LearnMorePanel,
} from './styles.js';
import colors from '../../utils/colors';

const Heading = () => (
  <HeadingContainer>
    <Line />
    <HeadingTextStyle>Your Quotes are in!</HeadingTextStyle>
    <Line />
  </HeadingContainer>
);

const QuoteSection = ({
  navigateTo,
  product,
  availableQuotes,
  showAll,
  toggleShowAll,
  plan,
  selectQuote,
  loading,
}) => {
  const heading = { name: 'header' };
  const quotesData =
    availableQuotes.length > 0 ? [heading, ...availableQuotes] : [];
  return (
    <QuoteSectionContainer>
      <TextStyle10 fontSize={28} color={colors.GRAY2} textAlign="center">
        {!loading
          ? availableQuotes.length > 0
            ? 'Let’s Review your Best Options'
            : 'No results found'
          : 'Loading...'}
      </TextStyle10>
      {!loading &&
        (showAll
          ? quotesData.map((quote, i) => (
              <QuoteSectionContainer key={i}>
                <Quote
                  data={quote}
                  index={i}
                  navigateTo={navigateTo}
                  product={product}
                  plan={plan}
                  selectQuote={selectQuote}
                />
                <Line
                  width="auto"
                  marginTop={quote.name === 'header' ? '5px' : '20px'}
                />
              </QuoteSectionContainer>
            ))
          : quotesData.slice(0, 4).map((quote, i) => (
              <QuoteSectionContainer key={i}>
                <Quote
                  data={quote}
                  index={i}
                  navigateTo={navigateTo}
                  product={product}
                  plan={plan}
                  selectQuote={selectQuote}
                />
                <Line
                  width="auto"
                  marginTop={quote.name === 'header' ? '5px' : '20px'}
                />
              </QuoteSectionContainer>
            )))}
      {quotesData.length > 3 &&
        !loading &&
        !showAll && (
          <Button1 onClick={toggleShowAll}>
            <Button2Text>REVIEW ALL AVAILABLE POLICIES </Button2Text>
          </Button1>
        )}
    </QuoteSectionContainer>
  );
};

const SidePanel = ({
  navigateTo,
  product,
  policyTerm,
  policyAmount,
  SetCoverageAmount,
  SetCoverageTerm,
  SetFilters,
}) =>
  product === 'perm' ? (
    <PermSidePanel
      navigateTo={navigateTo}
      product={product}
      policyAmount={policyAmount}
      SetCoverageAmount={SetCoverageAmount}
      SetCoverageTerm={SetCoverageTerm}
      SetFilters={SetFilters}
    />
  ) : (
    <TermSidePanel
      navigateTo={navigateTo}
      product={product}
      policyAmount={policyAmount}
      policyTerm={policyTerm}
      SetCoverageAmount={SetCoverageAmount}
      SetCoverageTerm={SetCoverageTerm}
      SetFilters={SetFilters}
    />
  );

const getImageSrc = code => {
  if (code === 'bkl') {
    return 'http://www.bkl.co.uk/wp-content/themes/bkl/img/bkl-logo.png';
  }
  return `https://lite.xrae.com/Images/Carriers/${code}.png`;
};
const Quote = ({ data, navigateTo, product, index, plan, selectQuote }) =>
  index === 0 ? (
    <QuoteStyle heading={true}>
      <TextStyle7 heading={true}>COMPANY</TextStyle7>
      <TextStyle8 heading={true}>{plan.toUpperCase()} PAYMENT</TextStyle8>
      <div />
    </QuoteStyle>
  ) : (
    <QuoteStyle>
      <LogoStyle>
        {' '}
        <img src={getImageSrc(data.carrierCode)} alt={data.name} />{' '}
        <div onClick={() => navigateTo('/')}>
          {' '}
          <TextStyle9>Learn more</TextStyle9>
        </div>
      </LogoStyle>
      <TextStyle11>{plan.toUpperCase()} PAYMENT</TextStyle11>
      <PriceStyle>$ {data[plan]} </PriceStyle>
      <ContinueButton onClick={() => selectQuote(data)}>
        {' '}
        CONTINUE{' '}
      </ContinueButton>
    </QuoteStyle>
  );

const QuotePanel = ({
  navigateTo,
  product,
  availableQuotes,
  showAll,
  toggleShowAll,
  plan,
  selectQuote,
  loading,
}) => (
  <QuoteContainer>
    {!loading && availableQuotes.length > 0 ? (
      <QuoteTopSection>
        <QuoteMessage color={colors.GRAY2}>
          {' '}
          Congratulations!&nbsp;
        </QuoteMessage>
        <QuoteMessage color={colors.MOBILE_HEADER_BG}>
          {availableQuotes.length} different policies fit your needs
        </QuoteMessage>
      </QuoteTopSection>
    ) : null}
    <QuoteSection
      navigateTo={navigateTo}
      product={product}
      availableQuotes={availableQuotes}
      showAll={showAll}
      toggleShowAll={toggleShowAll}
      plan={plan}
      selectQuote={selectQuote}
      loading={loading}
    />
  </QuoteContainer>
);

class BuildPolicyQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      plan: 'monthly',
      isROP: false,
      availableQuotes: [],
      loading: false,
    };
    this.toggleShowAll = this.toggleShowAll.bind(this);
    this.SetFilters = this.setFilters.bind(this);
    this.selectQuote = this.selectQuote.bind(this);
  }

  toggleShowAll() {
    this.setState({ showAll: !this.state.showAll });
  }

  componentWillReceiveProps(nextProps) {
    const {
      policyTerm,
      policyAmount,
      policyType,
      userInfo,
      product,
      primaryUserId,
    } = nextProps;
    if (
      policyTerm !== this.props.policyTerm ||
      policyAmount !== this.props.policyAmount
    ) {
      this.props.GetAvailableQuotes(
        primaryUserId,
        policyAmount,
        policyTerm,
        policyType,
        product
      );
      this.setState({ loading: true });
    } else {
      this.setState({
        showAll: false,
        loading: false,
        availableQuotes: nextProps.availableQuotes || [],
      });
    }
  }

  componentDidMount() {
    const {
      policyTerm,
      policyAmount,
      policyType,
      userInfo,
      product,
      profileDetails,
      primaryUserId,
    } = this.props;
    if (userInfo && primaryUserId) {
      this.props.GetAvailableQuotes(
        primaryUserId,
        policyAmount,
        policyTerm,
        policyType,
        product
      );
      this.setState({ loading: true });
    }
  }

  setFilters({ radioName, fieldValue }) {
    this.setState({
      [radioName]: fieldValue,
    });
  }

  selectQuote(data) {
    data['plan'] = this.state.plan;
    this.props.SetSelectedQuote(data);
    const url = window.location.hash.split('#')[1].split('/');
    const baseUrl = url.slice(0, url.length - 1).join('/');
    this.props.navigateTo(`${baseUrl}/review`);
  }

  render() {
    const {
      navigateTo,
      product,
      policyAmount,
      policyTerm,
      SetCoverageAmount,
      SetCoverageTerm,
    } = this.props;
    const { showAll, plan, availableQuotes, loading, isROP } = this.state;
    const filteredAvailableQuotes = availableQuotes.filter(q => {
      if (q.isROP === isROP) {
        return q;
      }
    });
    return (
      <Container>
        <Heading />
        <MainContainer>
          <SidePanel
            navigateTo={navigateTo}
            product={product}
            policyAmount={policyAmount}
            policyTerm={policyTerm}
            SetCoverageAmount={SetCoverageAmount}
            SetCoverageTerm={SetCoverageTerm}
            SetFilters={this.SetFilters}
          />
          <QuotePanel
            navigateTo={navigateTo}
            product={product}
            availableQuotes={filteredAvailableQuotes}
            showAll={showAll}
            toggleShowAll={this.toggleShowAll}
            plan={plan}
            selectQuote={this.selectQuote}
            loading={loading}
          />
        </MainContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  SetSelectedQuote: quote => dispatch(SetSelectedQuote(quote)),
  SetCoverageAmount: amount => dispatch(SetCoverageAmount(amount)),
  SetCoverageTerm: period => dispatch(SetCoverageTerm(period)),
  GetAvailableQuotes: (userId, amount, term, type, product) =>
    dispatch(GetAvailableQuotes(userId, amount, term, type, product)),
});

const mapsStateToProps = ({
  buildPolicyReducer: {
    availableQuotes,
    policyType,
    policyAmount,
    policyTerm,
    userInfo,
  },
  personalFormReducer: { profileDetails, primaryUserId },
}) => ({
  availableQuotes,
  policyType,
  policyAmount,
  policyTerm,
  userInfo,
  profileDetails,
  primaryUserId,
});

export default connect(mapsStateToProps, mapDispatchToProps)(BuildPolicyQuote);
