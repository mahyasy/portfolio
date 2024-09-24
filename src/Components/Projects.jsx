import "../app/ui/Projects.css";
import { Carousel, Flex, Row, Col } from "antd";
import Image from "next/image";

const container = {
  position: "relative",
  width: "300px",
};
const contentStyle = {
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#00308F",
  borderRadius: "20px",
};

const img = {
  height: "160px",
  width: "300px",
  borderRadius: "20px",
};
const Projects = () => {
  const Pro = [
    { id: 1, src: "/one.jpg", alt: "first project" },
    { id: 2, src: "/two.jpg", alt: "Second project" },
    { id: 3, src: "/three.jpg", alt: "Third project" },
    { id: 4, src: "/four.jpg", alt: "Fourth project" },
  ];
  return (
    <div>
      <Flex style={container} className="main" gap="middle" vertical>
        <h1>projects</h1>

        <Carousel autoplay>
          {Pro.map((item) => (
            <Col key={item.id}>
              <section style={contentStyle}>
                <Image
                  style={img}
                  className="Photo"
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={100}
                />
              </section>
            </Col>
          ))}
        </Carousel>
      </Flex>
    </div>
  );
};
export default Projects;
