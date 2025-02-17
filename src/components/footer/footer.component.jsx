import { FooterContainer, FooterParentContainer, InstaSVG, Label, LeftFooterContainer, LinkedInSVG, LinksContainer, RightFooterContainer } from "./footer.styles"

const Footer = () => {
  return (
    <FooterParentContainer>
      <FooterContainer>
        <LeftFooterContainer>
          <Label top="true">Contact</Label>
          <Label>Email: richardybanez7@gmail.com</Label>
          <Label>Phone: +63 9662291705</Label>
        </LeftFooterContainer>
        <RightFooterContainer>
          <Label>My links:</Label>
          <LinksContainer>
            <a href="https://www.linkedin.com/in/john-richard-yba%C3%B1ez-046ba8265/">
              <LinkedInSVG/>
            </a>
            <a href="https://www.instagram.com/drahc13/">
              <InstaSVG/>
            </a>
          </LinksContainer>
        </RightFooterContainer>
      </FooterContainer>
    </FooterParentContainer>
  )
}

export default Footer
