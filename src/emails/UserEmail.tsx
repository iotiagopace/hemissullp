import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
export const UserEmail = ({ name, message }: { name: string; message: string }) => (
  <Html>
    <Head />
    <Preview>Your message has been received</Preview>
    <Tailwind>
      <Body className="bg-white font-sans">
        <Container className="border border-solid border-black mx-auto my-[40px] max-w-[600px] bg-[#d1f5fa] p-[30px] text-center">
          <Img src="https://cdn-icons-png.flaticon.com/128/944/944948.png" width="40" className="mx-auto mb-5" />
          <Heading className="text-2xl font-bold">THANKS FOR CONTACTING US!</Heading>
          <Text className="text-lg">Hello {name},</Text>
          <Hr className="my-5 border-gray-300" />
          <Text className="font-bold text-gray-600">Your message is:</Text>
          <Section className="bg-[#f1f3f6] border-l-4 border-[#fcdde5] p-4 my-4 rounded">
            <Text className="m-0 italic">{message}</Text>
          </Section>
          <Text>We have received your message and will get back to you soon.</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);