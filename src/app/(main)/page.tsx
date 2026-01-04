"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Row,
  Badge,
  Icon,
  Tag,
  Flex,
  Avatar,
  Card,
  Line,
  LetterFx,
  RevealFx,
} from "@once-ui-system/core";

// Portfolio data
const portfolioData = {
  name: "Shilpa Paira",
  title: "Graphics Designer | UI/UX Designer",
  location: "Delhi, India",
  email: "shilpapaira84@gmail.com",
  phone: "+91 8709208262",
  behance: "https://www.behance.net/shilpapaira1",
  profileImage: "/images/profile.jpg",
  
  about: `Innovative and motivated Graphic & UI/UX Designer with a strong passion for visual storytelling and brand communication. Experienced in creating social media campaigns, billboards, and marketing materials that combine creativity with functionality. Dedicated to producing engaging, user-friendly designs that enhance brand presence across digital and print platforms.`,
  
  skills: [
    { name: "Adobe Photoshop", category: "design" },
    { name: "Adobe Illustrator", category: "design" },
    { name: "Procreate", category: "design" },
    { name: "Canva", category: "design" },
    { name: "Figma", category: "ui" },
    { name: "Adobe InDesign", category: "design" },
    { name: "Adobe XD", category: "ui" },
    { name: "Cap Cut", category: "video" },
    { name: "Autodesk Sketchbook", category: "design" },
    { name: "Illustration", category: "skill" },
    { name: "Mixed Media", category: "skill" },
    { name: "Editing", category: "video" },
    { name: "MS PowerPoint", category: "office" },
    { name: "MS Excel", category: "office" },
    { name: "MS Word", category: "office" },
  ],
  
  experience: [
    {
      company: "Sinfolix Technology",
      period: "June 2024 - September 2024",
      role: "Graphic Designer Intern",
      achievements: [
        "Designed and developed engaging social media creatives, posters, and digital marketing graphics that aligned with brand identity",
        "Created impactful billboard designs and print-ready advertising materials for campaigns",
        "Collaborated with the design team to conceptualize and execute innovative visual ideas for client projects",
        "Gained hands-on experience in graphic design tools (Photoshop, Illustrator, Canva) and applied best practices in branding and visual communication",
        "Ensured all designs maintained consistency, clarity, and professional quality across digital and print platforms",
      ],
    },
  ],
  
  education: [
    {
      degree: "Bachelors of Visual Arts",
      institution: "Bharati Vidyapeeth College of Visual Arts, Pune",
      period: "2021 - 2025",
    },
    {
      degree: "Senior Secondary School Examination",
      institution: "Baharagora College, Baharagora, Jharkhand",
      period: "2016 - 2018",
    },
    {
      degree: "Secondary School Examination",
      institution: "H.S. Bhawani Devi Bankati, East Singhbhum, Jharkhand",
      period: "2015 - 2016",
    },
  ],
  
  languages: [
    { name: "English", level: "Conversational" },
    { name: "Hindi", level: "Native" },
    { name: "Bengali", level: "Native" },
  ],
};

// Section component for consistent styling
function Section({ 
  id, 
  title, 
  icon, 
  children 
}: { 
  id: string; 
  title: string; 
  icon: string; 
  children: React.ReactNode;
}) {
  return (
    <Column id={id} gap="l" fillWidth paddingY="xl">
      <Row gap="m" vertical="center">
        <Icon name={icon} size="l" onBackground="brand-medium" />
        <Heading variant="heading-strong-l">{title}</Heading>
      </Row>
      <Line background="neutral-alpha-weak" />
      {children}
    </Column>
  );
}

// Skill tag component
function SkillTag({ name, category }: { name: string; category: string }) {
  const getColor = () => {
    switch (category) {
      case "design": return "brand";
      case "ui": return "accent";
      case "video": return "warning";
      case "skill": return "success";
      default: return "neutral";
    }
  };
  
  return (
    <Tag size="l" variant={getColor()}>
      {name}
    </Tag>
  );
}

export default function Home() {
  return (
    <Column fillWidth>
      {/* Hero Section */}
      <Column 
        fillWidth 
        center 
        paddingX="l" 
        paddingY="xl"
        style={{ minHeight: "100vh" }}
      >
        <Column maxWidth="l" gap="xl" horizontal="center">
          <RevealFx translateY={4} delay={0.1}>
            <Column gap="l" horizontal="center" align="center">
              <Avatar 
                src={portfolioData.profileImage} 
                size="xl"
              />
              <Column gap="s" horizontal="center" align="center">
                <Heading variant="display-strong-xl" align="center">
                  <LetterFx trigger="instant">{portfolioData.name}</LetterFx>
                </Heading>
                <Text 
                  variant="heading-default-l" 
                  onBackground="brand-medium"
                  align="center"
                >
                  {portfolioData.title}
                </Text>
              </Column>
            </Column>
          </RevealFx>
          
          <RevealFx translateY={4} delay={0.2}>
            <Row gap="m" wrap horizontal="center">
              <Badge 
                icon="mapPin"
                textVariant="body-default-s"
                border="neutral-alpha-medium"
                onBackground="neutral-medium"
              >
                {portfolioData.location}
              </Badge>
              <Badge 
                icon="envelope"
                textVariant="body-default-s"
                border="neutral-alpha-medium"
                onBackground="neutral-medium"
              >
                {portfolioData.email}
              </Badge>
              <Badge 
                icon="phone"
                textVariant="body-default-s"
                border="neutral-alpha-medium"
                onBackground="neutral-medium"
              >
                {portfolioData.phone}
              </Badge>
            </Row>
          </RevealFx>
          
          <RevealFx translateY={4} delay={0.3}>
            <Text 
              variant="body-default-l" 
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
              style={{ maxWidth: "700px" }}
            >
              {portfolioData.about}
            </Text>
          </RevealFx>
          
          <RevealFx translateY={4} delay={0.4}>
            <Row gap="m" wrap horizontal="center">
              <Button
                href={portfolioData.behance}
                prefixIcon="behance"
                variant="primary"
                arrowIcon
              >
                View Portfolio
              </Button>
              <Button
                href={`mailto:${portfolioData.email}`}
                prefixIcon="envelope"
                variant="secondary"
              >
                Contact Me
              </Button>
            </Row>
          </RevealFx>
          
          <RevealFx translateY={4} delay={0.5}>
            <Button
              href="#skills"
              variant="tertiary"
              suffixIcon="arrowDown"
              size="s"
            >
              Explore More
            </Button>
          </RevealFx>
        </Column>
      </Column>
      
      {/* Main Content */}
      <Column fillWidth paddingX="l" maxWidth="l" horizontal="center">
        {/* Skills Section */}
        <Section id="skills" title="Skills & Expertise" icon="sparkles">
          <Column gap="m">
            <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="8">
              Design Tools
            </Text>
            <Flex gap="8" wrap>
              {portfolioData.skills
                .filter(s => s.category === "design" || s.category === "ui")
                .map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} category={skill.category} />
                ))}
            </Flex>
            
            <Text variant="body-default-m" onBackground="neutral-weak" marginTop="16" marginBottom="8">
              Creative Skills
            </Text>
            <Flex gap="8" wrap>
              {portfolioData.skills
                .filter(s => s.category === "skill" || s.category === "video")
                .map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} category={skill.category} />
                ))}
            </Flex>
            
            <Text variant="body-default-m" onBackground="neutral-weak" marginTop="16" marginBottom="8">
              Office Tools
            </Text>
            <Flex gap="8" wrap>
              {portfolioData.skills
                .filter(s => s.category === "office")
                .map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} category={skill.category} />
                ))}
            </Flex>
          </Column>
        </Section>
        
        {/* Experience Section */}
        <Section id="experience" title="Work Experience" icon="briefcase">
          <Column gap="l">
            {portfolioData.experience.map((exp, index) => (
              <Card key={index} padding="l" radius="l" fillWidth>
                <Column gap="m">
                  <Row gap="m" vertical="center" wrap>
                    <Heading variant="heading-strong-m">{exp.company}</Heading>
                    <Badge background="brand-medium" textVariant="label-default-s">{exp.period}</Badge>
                  </Row>
                  {exp.role && (
                    <Text variant="body-strong-m" onBackground="brand-medium">
                      {exp.role}
                    </Text>
                  )}
                  <Column gap="s" paddingLeft="16">
                    {exp.achievements.map((achievement, i) => (
                      <Row key={i} gap="s" vertical="start">
                        <Icon name="chevronRight" size="s" onBackground="brand-medium" style={{ marginTop: "4px", flexShrink: 0 }} />
                        <Text variant="body-default-m" onBackground="neutral-weak">
                          {achievement}
                        </Text>
                      </Row>
                    ))}
                  </Column>
                </Column>
              </Card>
            ))}
          </Column>
        </Section>
        
        {/* Education Section */}
        <Section id="education" title="Education" icon="academic">
          <Flex gap="16" wrap fillWidth>
            {portfolioData.education.map((edu, index) => (
              <Card key={index} padding="l" radius="l" style={{ flex: '1 1 280px', minWidth: '280px' }}>
                <Column gap="s">
                  <Badge background="brand-medium" textVariant="label-default-s">{edu.period}</Badge>
                  <Heading variant="heading-strong-s">{edu.degree}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {edu.institution}
                  </Text>
                </Column>
              </Card>
            ))}
          </Flex>
        </Section>
        
        {/* Languages Section */}
        <Section id="languages" title="Languages" icon="language">
          <Row gap="m" wrap>
            {portfolioData.languages.map((lang, index) => (
              <Card key={index} padding="m" radius="l">
                <Column gap="4" horizontal="center" align="center">
                  <Text variant="body-strong-m">{lang.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {lang.level}
                  </Text>
                </Column>
              </Card>
            ))}
          </Row>
        </Section>
        
        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" icon="envelope">
          <Card padding="xl" radius="l" fillWidth background="brand-weak">
            <Column gap="l" horizontal="center" align="center">
              <Text 
                variant="body-default-l" 
                align="center"
                wrap="balance"
              >
                I'm always excited to work on new creative projects. Whether you need stunning graphics, 
                UI/UX design, or visual branding — let's create something amazing together!
              </Text>
              
              <Flex gap="16" wrap fillWidth horizontal="center">
                <Button
                  href={`mailto:${portfolioData.email}`}
                  prefixIcon="envelope"
                  variant="primary"
                >
                  Email Me
                </Button>
                <Button
                  href={`tel:${portfolioData.phone}`}
                  prefixIcon="phone"
                  variant="secondary"
                >
                  Call Me
                </Button>
                <Button
                  href={portfolioData.behance}
                  prefixIcon="behance"
                  variant="secondary"
                  arrowIcon
                >
                  Behance
                </Button>
              </Flex>
            </Column>
          </Card>
        </Section>
        
        {/* Footer */}
        <Column 
          fillWidth 
          paddingY="xl" 
          horizontal="center" 
          align="center"
          gap="m"
        >
          <Line background="neutral-alpha-weak" fillWidth />
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            © 2026 Shilpa Paira. Crafted with creativity and passion.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
