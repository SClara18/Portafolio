import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Certificate.png";
import projImg2 from "../assets/img/Certificate2.png";
import projImg3 from "../assets/img/Certificate3.png";
import projImg4 from "../assets/img/Certificate5.png";
import projImg5 from "../assets/img/Certificate6.png";
import projImg6 from "../assets/img/Certificate4.png";
import projImg7 from "../assets/img/Certificate7.png";
import projImg8 from "../assets/img/Certificate8.png";
import projImg9 from "../assets/img/Certificate9.png";
import projImg10 from "../assets/img/Certificate10.png";
import projImg11 from "../assets/img/Certificate11.png";
import projImg12 from "../assets/img/Certificate12.png";
import projImg13 from "../assets/img/Certificate13.png";
import projImg14 from "../assets/img/Certificate14.png";
import projImg15 from "../assets/img/Certificate15.png";
import projImg16 from "../assets/img/Certificate16.png";
import projImg17 from "../assets/img/Certificate17.png";
import projImg18 from "../assets/img/Certificate18.png"

export const Projects = () => {
    
    const projects = [
        {
            title: "Siemplify Platform Fundamentals.",
            description: "Simplifly Platform Fundamentals es un curso que enseña los conceptos básicos y fundamentales para utilizar la plataforma Simplify, una herramienta que permite la automatización y orquestación de tareas de seguridad informática.",
            imgUrl: projImg1,
        },
        {
            title: "Chronicle SIEM foundamentals.",
            description: "Chronicle SIEM Fundamentals es un curso que proporciona una introducción a la plataforma de seguridad de información y eventos (SIEM) de Chronicle. En este curso, los estudiantes aprenden cómo utilizar la plataforma para la detección de amenazas y la respuesta a incidentes de seguridad en tiempo real. ",
            imgUrl: projImg2,
        },
        {
            title: "Siemplify Certified SOAR Analyst.",
            description: "Siemplify Certified SOAR Analyst es una certificación que se otorga a los profesionales que han demostrado habilidades avanzadas en el uso de la plataforma Siemplify para la automatización y orquestación de tareas de seguridad informática. ",
            imgUrl: projImg3,
        },
        {
            title: "Chronicle Certified SOAR Developer.",
            description: "Chronicle Certified SOAR Developer es una certificación otorgada a los profesionales de seguridad informática que han demostrado habilidades avanzadas en la creación y personalización de flujos de trabajo de seguridad en la plataforma de automatización y orquestación de tareas de seguridad (SOAR) de Chronicle.",
            imgUrl: projImg6,
        },
        {
            title: "AWS Cloud Foundations.",
            description: "AWS Cloud Foundations es un curso que proporciona una introducción a los conceptos fundamentales de la nube de Amazon Web Services (AWS). En este curso, los estudiantes aprenden los principios básicos de la computación en la nube, la arquitectura de AWS, la creación de instancias, el almacenamiento de datos y la seguridad.",
            imgUrl: projImg17,
        },
        {
            title: "Cloud Computing.",
            description: "El curso de Cloud Computing de Google es un programa de capacitación en línea que cubre los fundamentos de la infraestructura de la nube de Google Cloud Platform (GCP). En este curso, los estudiantes aprenden los conceptos clave del Cloud Computing, incluyendo los modelos de servicio de la nube, la infraestructura de la nube, la seguridad de la nube y la administración de recursos en la nube.",
            imgUrl: projImg18,
        },
    ];
    const cert = [
        {
            title: "EHE.",
            description: "Essentials of Ethical Hacking es un curso de capacitación en seguridad informática que se enfoca en los fundamentos del hacking ético. En este curso, los estudiantes aprenden a identificar y explotar vulnerabilidades en sistemas y redes informáticas para poder protegerlos de ataques malintencionados.",
            imgUrl: projImg4,
        },
        {
            title: "Seguridad informática: defensa contra las artes oscuras digitales.",
            description: "Defensa contra las artes oscuras digitales es un término metafórico que se utiliza en el campo de la seguridad informática para describir la protección de los sistemas y redes informáticas contra ataques cibernéticos maliciosos.",
            imgUrl: projImg5,
        },
        {
            title: "Technical Support Fundamentals.",
            description: "Es un curso que proporciona una introducción a los conceptos y habilidades básicas necesarias para brindar soporte técnico efectivo en un entorno empresarial.",
            imgUrl: projImg7,
        },
        {
            title: "Network Security & Database Vulnerabilities.",
            description: "Es un curso que se centra en la seguridad de redes y bases de datos. El curso cubre los principios básicos de la seguridad de redes, incluyendo la autenticación, la autorización y la auditoría de acceso.",
            imgUrl: projImg14,
        },
        {
            title: "PCAP",
            description: " Es un programa de formación que tiene como objetivo preparar a los estudiantes para el examen de certificación PCAP ofrecido por el Python Institute. El curso cubre los temas que se evalúan en el examen de certificación.",
            imgUrl: projImg15,
        },
        {
            title: "Bytes - Hands on Lab - Beginner: Dev Gym - Databases for Developers.",
            description: "Es un curso diseñado para desarrolladores de software que deseen aprender cómo trabajar con bases de datos relacionales y cómo utilizar SQL para acceder y manipular datos en bases de datos.",
            imgUrl: projImg16,
        },
    ];
    const certe = [
        {
            title: "Cybersecurity Roles, Processes & Operating System Security.",
            description: "Es un programa de formación en línea que cubre los conceptos básicos de ciberseguridad, los roles y responsabilidades de los profesionales de la ciberseguridad, los procesos y prácticas recomendadas para la seguridad de sistemas operativos.",
            imgUrl: projImg8,
        },
        {
            title: "Cybersecurity Compliance Framework & System Administration.",
            description: "Es un programa de formación en línea que cubre los conceptos de cumplimiento normativo de ciberseguridad y las prácticas recomendadas para la administración de sistemas para garantizar la seguridad de la información.",
            imgUrl: projImg9,
        },
        {
            title: "Introduction to Cybersecurity Tools & Cyber Attacks.",
            description: "Es un programa de formación en línea que cubre los conceptos básicos de las herramientas de ciberseguridad y los tipos comunes de ataques cibernéticos.",
            imgUrl: projImg10,
        },
        {
            title: "Cyber Threat Intelligence.",
            description: "El curso de Cyber Threat Intelligence te enseñará cómo recopilar y analizar información sobre amenazas cibernéticas, cómo identificar las tácticas, técnicas y procedimientos (TTP) de los atacantes, cómo evaluar el riesgo de las amenazas y cómo utilizar esta información para tomar decisiones informadas sobre la seguridad de una organización.",
            imgUrl: projImg11,
        },
        {
            title: "IBM Cybersecurity Analyst Assessment.",
            description: "El assessment consta de una serie de preguntas de opción múltiple que cubren una amplia gama de temas relacionados con la ciberseguridad, como la seguridad de redes, la gestión de vulnerabilidades, la detección y respuesta a amenazas, y el cumplimiento de regulaciones y normativas. Las preguntas están diseñadas para evaluar la comprensión del candidato de los conceptos clave, así como su capacidad para aplicar este conocimiento a escenarios del mundo real.",
            imgUrl: projImg12,
        },
        {
            title: "Testing, Incident Response y Forensics.",
            description: "Se enfoca en desarrollar habilidades y conocimientos en tres áreas clave de la ciberseguridad las cuales son, (Pruebas de Penetración, Respuesta a Incidentes y Forense) .",
            imgUrl: projImg13,
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Certificados</h2>
                    <p> A continuación, se muestran algunas de las certificaciones que hemos obtenido en áreas clave como ciberseguridad y tecnologías de Google.</p>
    <Tab.Container id="project" defaultActiveKey = "first">
    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
    <Nav.Item>
        <Nav.Link eventKey="first">Pagina 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="second">Pagina 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="third">Pagina 3</Nav.Link>
        </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="first">
        <Row>
            {
                projects.map((project, index) => {
                    return(
                        <ProjectCard 
                        key={index}
                        {...project}
                        />
                    )
                }) 
            }
        </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Row>
            {
                cert.map((project, index) => {
                    return(
                        <ProjectCard 
                        key={index}
                        {...project}
                        />
                    )
                }) 
            }
        </Row>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Row>
        {
                certe.map((project, index) => {
                    return(
                        <ProjectCard 
                        key={index}
                        {...project}
                        />
                    )
                }) 
            }
            </Row>
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>

    )
}