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
  GColumn4,
  GColumn2Text,
  GCImage,
  GCHeading,
  GHeading2,
  Empty,
  NotAvailable,
} from './styles';
import colors from '../../utils/colors';
import moment from 'moment';

const MyQuotes = ({ insurances }) => {
  return (
    <Container>
      <HeaderConatiner>
        <HeadingLine />
        <HeadingText>My Insurances</HeadingText>
        <HeadingLine />
      </HeaderConatiner>
      <ProductContainer>
        {insurances.length > 0 && (
          <GridHeading>
            <GHeading fontSize={16} color={colors.BLACK}>
              Products
            </GHeading>
            <GHeading2 fontSize={16} color={colors.BLACK}>
              Date
            </GHeading2>
            <GHeading2 fontSize={16} color={colors.BLACK}>
              Price
            </GHeading2>
            <GHeading2 fontSize={16} color={colors.BLACK}>
              Status
            </GHeading2>
          </GridHeading>
        )}
        {insurances.length === 0 && (
          <NotAvailable>No insurances available</NotAvailable>
        )}
        <GridContent>
          {insurances.map((insurance, index) => (
            <GridRow key={index} border={index < insurances.length - 1}>
              {insurance.carrierCode !== 'abc' ? (
                <GCImage
                  src={
                    insurance.carrierCode !== 'abc'
                      ? `https://lite.xrae.com/Images/Carriers/${
                          insurance.carrierCode
                        }.png`
                      : null
                  }
                  alt={index}
                />
              ) : (
                <Empty />
              )}
              <GColumn1>
                <GCHeading fontSize={16} color={colors.BLACK}>
                  Products :
                </GCHeading>
                <GColumn2Text>
                  {insurance.coverage > 0 ? `$${insurance.coverage}` : ''}{' '}
                  {`${insurance.type} insurance`}
                </GColumn2Text>
              </GColumn1>
              <GColumn2>
                <GCHeading fontSize={16} color={colors.BLACK}>
                  Date :
                </GCHeading>
                <GColumn2Text>
                  {' '}
                  {moment(insurance.created_at).format('DD/MM/YYYY')}
                </GColumn2Text>
              </GColumn2>
              <GColumn2>
                <GCHeading fontSize={16} color={colors.BLACK}>
                  Price :
                </GCHeading>
                <GColumn2Text>
                  {insurance.price > 0 ? `$${insurance.price}` : ''}
                </GColumn2Text>
              </GColumn2>
              <GColumn4>
                <GCHeading fontSize={16} color={colors.BLACK}>
                  Status :
                </GCHeading>
                <GColumn2Text>{insurance.status}</GColumn2Text>
              </GColumn4>
            </GridRow>
          ))}
        </GridContent>
      </ProductContainer>
    </Container>
  );
};

export default MyQuotes;
