import Link from "next/link";
import Links, { LinkList, LinkItem, Anchor } from "./styles";

const FooterLinks = () => {
    return (
        <Links> 
            <LinkList>
                <LinkItem><Link href="#"><Anchor>FAQ</Anchor></Link></LinkItem>
                <LinkItem><Link href="/about"><Anchor>About</Anchor></Link></LinkItem>
                <LinkItem><Link href="/shift"><Anchor>Shift</Anchor></Link></LinkItem>
            </LinkList>
            <LinkList>
                <LinkItem><Link href="/press"><Anchor>Press</Anchor></Link></LinkItem>
                <LinkItem><Link href="/careers"><Anchor>Careers</Anchor></Link></LinkItem>
                <LinkItem><Link href="/contact"><Anchor>Contact Us</Anchor></Link></LinkItem>
            </LinkList>
            <LinkList>
                <LinkItem><Link href="#"><Anchor>Corporate / Group Wellness</Anchor></Link></LinkItem>
                <LinkItem><Link href="#"><Anchor>Ambassador Program</Anchor></Link></LinkItem>
                <LinkItem><Link href="#"><Anchor>Teacher Training</Anchor></Link></LinkItem>
            </LinkList>
        </Links>
    );
}
export default FooterLinks;