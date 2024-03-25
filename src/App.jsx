// import { Profile, FriendList, Section, Container, Heading } from "components";
import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import { Container } from "./components/Container/Container";
import { Heading } from "./components/Heading/Heading";
import { Section } from "./components/Section/Section";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Profile" bottom />
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />

        <Heading title="Task 2 List of friends" top bottom />
        <FriendList friends={friends} />

        <Heading title="Task 3 Transactions' history" top bottom />
        <TransactionHistory items={transactions} />
      </Container>
    </Section>
  );
};
