import { FooterContainer, FooterParentContainer, Label, LeftFooterContainer, RightFooterContainer } from "./footer.styles"

const Footer = () => {
  return (
    <FooterParentContainer>
      <FooterContainer>
        <LeftFooterContainer>
          <Label top="true">Contact</Label>
          <Label>Email: j.richardybanez7@gmail.com</Label>
          <Label>Phone: +63 9690621141</Label>
        </LeftFooterContainer>
        <RightFooterContainer>
          <Label>Portfolio: [Link here soon]</Label>
          <Label>Resume: [File here soon]</Label>
        </RightFooterContainer>
      </FooterContainer>
    </FooterParentContainer>
  )
}

export default Footer