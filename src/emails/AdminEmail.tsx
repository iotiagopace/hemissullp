import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
  Row,
  Column,
} from "@react-email/components";

interface AdminEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const AdminEmail = ({ name, email, phone, subject, message }: AdminEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-black mx-auto my-[40px] max-w-[600px] bg-[#d1f5fa] p-[30px] text-center">
          <Img
            src="https://cdn-icons-png.flaticon.com/128/944/944948.png"
            width="40"
            height="40"
            alt="Logo"
            className="mx-auto mb-[20px]"
          />
          <Heading className="text-[28px] font-bold text-[#333333] m-0">
            New Contact Form Submission 🛠
          </Heading>

          <Section className="my-[20px] text-left border-collapse border border-solid border-[#ddd]">
            <Row className="border-b border-solid border-[#ddd]">
              <Column className="p-2 font-bold w-[100px]">Name:</Column>
              <Column className="p-2">{name}</Column>
            </Row>
            <Row className="border-b border-solid border-[#ddd]">
              <Column className="p-2 font-bold">Email:</Column>
              <Column className="p-2">{email}</Column>
            </Row>
            {phone && (
              <Row className="border-b border-solid border-[#ddd]">
                <Column className="p-2 font-bold">Phone:</Column>
                <Column className="p-2">{phone}</Column>
              </Row>
            )}
            {subject && (
              <Row className="border-b border-solid border-[#ddd]">
                <Column className="p-2 font-bold">Subject:</Column>
                <Column className="p-2">{subject}</Column>
              </Row>
            )}
            <Row>
              <Column className="p-2 font-bold">Message:</Column>
              <Column className="p-2">{message}</Column>
            </Row>
          </Section>

          <Text className="text-[16px] text-[#333333]">
            Thank you for reaching out! The information provided by the user has been sent directly to you for review.
          </Text>
        </Container>

        {/* Footer */}
        <Section className="bg-[#fcdde5] p-[30px] max-w-[600px] mx-auto rounded-b-md">
          <Row>
            <Column className="text-left">
              <Heading as="h3" className="text-sm font-bold m-0">Where to find us</Heading>
              <Text className="m-0 text-xs">
                Script Fusions, Dhaka, Bangladesh
                <Img src="https://flagsapi.com/BD/flat/64.png" width="20" className="inline ml-1" />
              </Text>
            </Column>
            <Column className="text-right">
              <Heading as="h3" className="text-sm font-bold m-0">Social media</Heading>
              <Section className="mt-2">
                <Img src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" width="20" className="inline mx-1" />
                <Img src="https://img.icons8.com/ios-glyphs/30/twitter.png" width="20" className="inline mx-1" />
                <Img src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" width="20" className="inline mx-1" />
              </Section>
            </Column>
          </Row>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);