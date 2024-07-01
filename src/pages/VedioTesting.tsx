import Container from "@/components/layout/shared/Container";

const VedioTesting = () => {
  return (
    <div className="h-screen">
      <Container>
        <h1>Hello</h1>
        <video width="320" height="240" controls className="rounded-2xl">
          <source src="" />
        </video>
      </Container>
    </div>
  );
};

export default VedioTesting;
