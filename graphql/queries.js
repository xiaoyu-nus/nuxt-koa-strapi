import gql from "graphql-tag";

export const allWalletsQuery = gql`
  query allWalletsQuery {
    wallets {
      data {
        attributes {
          slug
          wallet_name
          wallet_type
          total_balance
          coins {
            data {
              attributes {
                total_balance
                network
              }
            }
          }
        }
      }
    }
  }
`;

export const singleWalletQuery = gql`
  query singleWalletQuery {
    wallet(id: 1) {
      data {
        attributes {
          slug
          wallet_name
          wallet_type
          total_balance
          coins {
            data {
              attributes {
                total_balance
                network
              }
            }
          }
        }
      }
    }
  }
`;
