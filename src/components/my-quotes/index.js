import React from 'react';
import {
  Container,
  HeaderConatiner,
  HeadingLine,
  HeadingText,
  ProductContainer,
  GridHeading,
  GHeading,
  GridContent,
  GridRow,
  GColumn1,
  GColumn2,
  GColumn2Text,
  GCTA,
  CtaText,
  NotAvailable,
} from './styles';
import colors from '../../utils/colors';
import moment from 'moment';

const MyQuotes = ({ quotes }) => {
  return (
    <Container>
      <HeaderConatiner>
        <HeadingLine />
        <HeadingText>My Quotes</HeadingText>
        <HeadingLine />
      </HeaderConatiner>
      <ProductContainer>
        {quotes.length > 0 && (
          <GridHeading>
            <GHeading fontSize={16} color={colors.BLACK}>
              Products
            </GHeading>
            <GHeading fontSize={16} color={colors.BLACK}>
              Date
            </GHeading>
          </GridHeading>
        )}
        {quotes.length === 0 && (
          <NotAvailable>No quotes available</NotAvailable>
        )}
        <GridContent>
          {quotes.map((quote, index) => (
            <GridRow key={index} border={index < quotes.length - 1}>
              <GColumn1>
                {quote.coverage > 0 ? `$${quote.coverage}` : ''}{' '}
                {`${quote.type} Insurance`}
              </GColumn1>
              <GColumn2>
                <GColumn2Text>
                  {moment(quote.created_at).format('DD/MM/YYYY')}
                </GColumn2Text>
                <GCTA>
                  <CtaText>Open</CtaText>
                  <CtaText>-></CtaText>
                </GCTA>
              </GColumn2>
            </GridRow>
          ))}
        </GridContent>
      </ProductContainer>
    </Container>
  );
};

export default MyQuotes;
