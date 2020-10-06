import Links, { LinkList, LinkItem, Link } from "./styles";

const FooterLinks = () => {
    return (
        <Links> 
            <LinkList>
                <LinkItem><Link href="#">FAQ</Link></LinkItem>
                <LinkItem><Link href="#">About</Link></LinkItem>
                <LinkItem><Link href="#">Shift</Link></LinkItem>
            </LinkList>
            <LinkList>
                <LinkItem><Link href="#">Press</Link></LinkItem>
                <LinkItem><Link href="#">Careers</Link></LinkItem>
                <LinkItem><Link href="#">Contact Us</Link></LinkItem>
            </LinkList>
            <LinkList>
                <LinkItem><Link href="#">Corporate / Group Wellness</Link></LinkItem>
                <LinkItem><Link href="#">Ambassador Program</Link></LinkItem>
                <LinkItem><Link href="#">Teacher Training</Link></LinkItem>
            </LinkList>
        </Links>
    );
}
export default FooterLinks;