import Link from "next/link";
import Links, { LinkList, LinkItem, Anchor } from "./styles";

const FooterLinks = () => {
  return (
    <Links>
      <LinkList>
        <LinkItem>
          <Link href="/">
            <Anchor>Explore</Anchor>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/">
            <Anchor>About</Anchor>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/">
            <Anchor>FAQ</Anchor>
          </Link>
        </LinkItem>
      </LinkList>
      <LinkList>
        <LinkItem>
          <Link href="/">
            <Anchor>Press</Anchor>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/careers">
            <Anchor>Careers</Anchor>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/contact">
            <Anchor>Contact Us</Anchor>
          </Link>
        </LinkItem>
      </LinkList>
      <LinkList>
        <LinkItem>
          <Link href="/workplace-wellness">
            <Anchor>Corporate / Group Wellness</Anchor>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/">
            <Anchor>Ambassador Program</Anchor>
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="/teacher-training">
            <Anchor>Teacher Training</Anchor>
          </Link>
        </LinkItem>
      </LinkList>
    </Links>
  );
};
export default FooterLinks;
