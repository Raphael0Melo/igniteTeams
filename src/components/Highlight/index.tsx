import { Container, Title, SubTitle } from "./styles";

type Props = {
  title: String;
  subTitle: String;
}

export function Highlight({title, subTitle }: Props) {
  return (
    <Container>
      <Title>
          {title}
      </Title>

      <SubTitle>
          {subTitle}
      </SubTitle>
    </Container>
  )
}