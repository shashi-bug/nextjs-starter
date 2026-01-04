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
      icon: "🎨",
    },
    {
      degree: "Senior Secondary School Examination",
      institution: "Baharagora College, Baharagora, Jharkhand",
      period: "2016 - 2018",
      icon: "📚",
    },
    {
      degree: "Secondary School Examination",
      institution: "H.S. Bhawani Devi Bankati, East Singhbhum, Jharkhand",
      period: "2015 - 2016",
      icon: "📖",
    },
  ],

  languages: [
    { name: "English", level: "Conversational", flag: "🇬🇧" },
    { name: "Hindi", level: "Native", flag: "🇮🇳" },
    { name: "Bengali", level: "Native", flag: "🇧🇩" },
  ],
};

// Floating shapes component for background animations
function FloatingShapes({ variant }: { variant: "hero" | "skills" | "experience" | "education" | "contact" | "languages" }) {
  const shapes: Record<string, React.ReactNode> = {
    hero: (
      <>
        {/* Large decorative shapes */}
        <div className="floating-shape circle float-1" style={{ width: 140, height: 140, top: "8%", left: "3%" }} />
        <div className="floating-shape square float-2" style={{ width: 90, height: 90, top: "15%", right: "8%" }} />
        <div className="floating-shape blob float-7" style={{ width: 180, height: 180, bottom: "20%", left: "5%" }} />
        <div className="floating-shape circle float-4" style={{ width: 110, height: 110, bottom: "15%", right: "3%" }} />
        
        {/* Medium shapes */}
        <div className="floating-shape ring float-3" style={{ width: 80, height: 80, top: "40%", left: "8%" }} />
        <div className="floating-shape square float-6" style={{ width: 60, height: 60, top: "60%", right: "12%" }} />
        <div className="floating-shape gradient-orb float-8" style={{ width: 200, height: 200, top: "30%", right: "20%" }} />
        
        {/* Small accent shapes */}
        <div className="floating-shape circle float-5" style={{ width: 40, height: 40, top: "25%", left: "25%" }} />
        <div className="floating-shape star" style={{ top: "20%", left: "40%" }} />
        <div className="floating-shape star" style={{ top: "45%", right: "25%", animationDelay: "0.5s" }} />
        <div className="floating-shape star" style={{ bottom: "30%", left: "35%", animationDelay: "1s" }} />
        <div className="floating-shape star" style={{ top: "70%", right: "40%", animationDelay: "1.5s" }} />
      </>
    ),
    skills: (
      <>
        <div className="floating-shape circle float-2" style={{ width: 100, height: 100, top: "5%", right: "5%" }} />
        <div className="floating-shape square float-3" style={{ width: 70, height: 70, bottom: "15%", left: "3%" }} />
        <div className="floating-shape blob float-6" style={{ width: 120, height: 120, top: "50%", right: "2%" }} />
        <div className="floating-shape ring float-4" style={{ width: 60, height: 60, bottom: "40%", left: "8%" }} />
        <div className="floating-shape gradient-orb float-1" style={{ width: 150, height: 150, top: "20%", left: "10%" }} />
        <div className="floating-shape star" style={{ top: "30%", right: "20%" }} />
        <div className="floating-shape star" style={{ bottom: "25%", left: "25%", animationDelay: "0.7s" }} />
        <div className="mesh-gradient" />
      </>
    ),
    experience: (
      <>
        <div className="floating-shape square float-1" style={{ width: 90, height: 90, top: "10%", left: "2%" }} />
        <div className="floating-shape circle float-4" style={{ width: 110, height: 110, bottom: "8%", right: "3%" }} />
        <div className="floating-shape blob float-7" style={{ width: 140, height: 140, top: "40%", right: "5%" }} />
        <div className="floating-shape ring float-2" style={{ width: 70, height: 70, top: "60%", left: "5%" }} />
        <div className="floating-shape gradient-orb float-3" style={{ width: 180, height: 180, bottom: "30%", left: "15%" }} />
        <div className="floating-shape star" style={{ top: "25%", right: "30%" }} />
        <div className="floating-shape star" style={{ bottom: "35%", left: "40%", animationDelay: "0.8s" }} />
      </>
    ),
    education: (
      <>
        <div className="floating-shape circle float-3" style={{ width: 80, height: 80, top: "15%", left: "4%" }} />
        <div className="floating-shape square float-2" style={{ width: 65, height: 65, bottom: "20%", right: "6%" }} />
        <div className="floating-shape blob float-8" style={{ width: 100, height: 100, top: "50%", right: "3%" }} />
        <div className="floating-shape ring float-1" style={{ width: 55, height: 55, bottom: "50%", left: "8%" }} />
        <div className="floating-shape gradient-orb float-4" style={{ width: 130, height: 130, top: "30%", right: "15%" }} />
        <div className="floating-shape star" style={{ top: "20%", right: "25%" }} />
        <div className="floating-shape star" style={{ bottom: "30%", left: "30%", animationDelay: "0.6s" }} />
        <div className="mesh-gradient" />
      </>
    ),
    languages: (
      <>
        <div className="floating-shape circle float-2" style={{ width: 70, height: 70, top: "20%", right: "8%" }} />
        <div className="floating-shape square float-5" style={{ width: 50, height: 50, bottom: "30%", left: "5%" }} />
        <div className="floating-shape ring float-3" style={{ width: 45, height: 45, top: "40%", left: "10%" }} />
        <div className="floating-shape gradient-orb float-6" style={{ width: 100, height: 100, bottom: "20%", right: "15%" }} />
        <div className="floating-shape star" style={{ top: "30%", left: "35%" }} />
      </>
    ),
    contact: (
      <>
        <div className="floating-shape circle float-1" style={{ width: 120, height: 120, top: "8%", left: "8%" }} />
        <div className="floating-shape square float-4" style={{ width: 90, height: 90, bottom: "12%", right: "8%" }} />
        <div className="floating-shape blob float-7" style={{ width: 150, height: 150, top: "30%", right: "5%" }} />
        <div className="floating-shape ring float-2" style={{ width: 80, height: 80, bottom: "40%", left: "5%" }} />
        <div className="floating-shape gradient-orb float-3" style={{ width: 200, height: 200, top: "20%", left: "20%" }} />
        <div className="floating-shape star" style={{ top: "15%", right: "30%" }} />
        <div className="floating-shape star" style={{ bottom: "25%", left: "40%", animationDelay: "0.9s" }} />
        <div className="floating-shape star" style={{ top: "60%", right: "25%", animationDelay: "0.4s" }} />
      </>
    ),
  };

  return <>{shapes[variant]}</>;
}

// Section Header Component
function SectionHeader({ title, subtitle, icon }: { title: string; subtitle?: string; icon: string }) {
  return (
    <Column gap="8" marginBottom="32">
      <Row gap="12" vertical="center">
        <Flex
          padding="12"
          radius="l"
          background="brand-weak"
          horizontal="center"
          vertical="center"
        >
          <Icon name={icon} size="m" onBackground="brand-strong" />
        </Flex>
        <Column gap="4">
          <Heading variant="heading-strong-xl">{title}</Heading>
          {subtitle && (
            <Text variant="body-default-s" onBackground="neutral-weak">
              {subtitle}
            </Text>
          )}
        </Column>
      </Row>
    </Column>
  );
}

// Skill Category Component
function SkillCategory({ title, skills, delay }: { title: string; skills: typeof portfolioData.skills; delay: number }) {
  const getVariant = (category: string): "brand" | "accent" | "warning" | "success" | "neutral" => {
    switch (category) {
      case "design": return "brand";
      case "ui": return "accent";
      case "video": return "warning";
      case "skill": return "success";
      default: return "neutral";
    }
  };

  return (
    <RevealFx translateY={4} delay={delay}>
      <Column gap="12">
        <Text variant="label-strong-s" onBackground="neutral-medium">
          {title}
        </Text>
        <Flex gap="8" wrap>
          {skills.map((skill) => (
            <Tag
              key={skill.name}
              size="l"
              variant={getVariant(skill.category)}
              className="skill-tag"
            >
              {skill.name}
            </Tag>
          ))}
        </Flex>
      </Column>
    </RevealFx>
  );
}

export default function Home() {
  return (
    <Column fillWidth>
      {/* ==================== HERO SECTION ==================== */}
      <Column
        as="section"
        fillWidth
        paddingX="m"
        paddingY="64"
        style={{ minHeight: "100vh" }}
        horizontal="center"
        vertical="center"
        className="hero-section section-wrapper"
      >
        <FloatingShapes variant="hero" />
        <div className="hero-gradient" />

        <Column maxWidth="m" gap="32" horizontal="center" fillWidth style={{ position: "relative", zIndex: 1 }}>
          {/* Profile Image with Glow - Centered */}
          <RevealFx translateY={8} delay={0.1}>
            <Column horizontal="center" fillWidth>
              <div className="avatar-glow" style={{ borderRadius: "50%", padding: 4, display: "inline-flex" }}>
                <Avatar src={portfolioData.profileImage} size="xl" />
              </div>
            </Column>
          </RevealFx>

          {/* Name & Title */}
          <RevealFx translateY={8} delay={0.2}>
            <Column gap="12" horizontal="center" align="center" fillWidth>
              <Heading variant="display-strong-xl" align="center">
                <LetterFx trigger="instant" speed="medium">
                  {portfolioData.name}
                </LetterFx>
              </Heading>
              <Text
                variant="heading-default-l"
                onBackground="brand-medium"
                align="center"
              >
                {portfolioData.title}
              </Text>
            </Column>
          </RevealFx>

          {/* Contact Badges */}
          <RevealFx translateY={8} delay={0.3}>
            <Column gap="8" horizontal="center" fillWidth>
              <Flex gap="8" wrap horizontal="center">
                <Badge
                  icon="mapPin"
                  textVariant="body-default-s"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  {portfolioData.location}
                </Badge>
              </Flex>
              <Flex gap="8" wrap horizontal="center">
                <Badge
                  icon="envelope"
                  textVariant="body-default-s"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  {portfolioData.email}
                </Badge>
                <Badge
                  icon="phone"
                  textVariant="body-default-s"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  {portfolioData.phone}
                </Badge>
              </Flex>
            </Column>
          </RevealFx>

          {/* About Text */}
          <RevealFx translateY={8} delay={0.4}>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              {portfolioData.about}
            </Text>
          </RevealFx>

          {/* CTA Buttons */}
          <RevealFx translateY={8} delay={0.5}>
            <Flex gap="16" wrap horizontal="center">
              <Button
                href={portfolioData.behance}
                prefixIcon="behance"
                variant="primary"
                size="l"
                arrowIcon
              >
                View Portfolio
              </Button>
              <Button
                href={`mailto:${portfolioData.email}`}
                prefixIcon="envelope"
                variant="secondary"
                size="l"
              >
                Get In Touch
              </Button>
            </Flex>
          </RevealFx>

          {/* Scroll Indicator */}
          <RevealFx translateY={8} delay={0.6}>
            <Button
              href="#skills"
              variant="tertiary"
              suffixIcon="arrowDown"
              size="s"
            >
              Scroll to explore
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* ==================== SKILLS SECTION ==================== */}
      <Column
        as="section"
        id="skills"
        fillWidth
        paddingX="m"
        paddingY="48"
        horizontal="center"
        className="section-wrapper skills-section-bg"
        background="surface"
      >
        <FloatingShapes variant="skills" />
        <Column maxWidth="l" fillWidth gap="24" style={{ position: "relative", zIndex: 1 }}>
          <RevealFx translateY={4} delay={0.1}>
            <SectionHeader
              title="Skills & Expertise"
              subtitle="Tools and technologies I work with"
              icon="sparkles"
            />
          </RevealFx>

          <Column gap="32">
            <SkillCategory
              title="DESIGN TOOLS"
              skills={portfolioData.skills.filter((s) => s.category === "design" || s.category === "ui")}
              delay={0.2}
            />
            <SkillCategory
              title="CREATIVE SKILLS"
              skills={portfolioData.skills.filter((s) => s.category === "skill" || s.category === "video")}
              delay={0.3}
            />
            <SkillCategory
              title="PRODUCTIVITY"
              skills={portfolioData.skills.filter((s) => s.category === "office")}
              delay={0.4}
            />
          </Column>
        </Column>
      </Column>

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <Column
        as="section"
        id="experience"
        fillWidth
        paddingX="m"
        paddingY="48"
        horizontal="center"
        className="section-wrapper experience-section-bg"
      >
        <FloatingShapes variant="experience" />
        <Column maxWidth="l" fillWidth gap="24" style={{ position: "relative", zIndex: 1 }}>
          <RevealFx translateY={4} delay={0.1}>
            <SectionHeader
              title="Work Experience"
              subtitle="My professional journey"
              icon="briefcase"
            />
          </RevealFx>

          <Column gap="24">
            {portfolioData.experience.map((exp, index) => (
              <RevealFx key={index} translateY={4} delay={0.2}>
                <Card
                  padding="32"
                  radius="xl"
                  fillWidth
                  className="hover-card"
                  background="surface"
                >
                  <Column gap="24">
                    {/* Header */}
                    <Row gap="16" vertical="center" wrap>
                      <Flex
                        padding="16"
                        radius="l"
                        background="brand-weak"
                        horizontal="center"
                        vertical="center"
                      >
                        <Icon name="briefcase" size="l" onBackground="brand-strong" />
                      </Flex>
                      <Column gap="4" style={{ flex: 1 }}>
                        <Heading variant="heading-strong-l">{exp.company}</Heading>
                        <Text variant="body-strong-m" onBackground="brand-medium">
                          {exp.role}
                        </Text>
                      </Column>
                      <Badge background="brand-weak" textVariant="label-strong-s">
                        {exp.period}
                      </Badge>
                    </Row>

                    {/* Divider */}
                    <Line background="neutral-alpha-weak" />

                    {/* Achievements */}
                    <Column gap="16">
                      <Text variant="label-strong-s" onBackground="neutral-medium">
                        KEY ACHIEVEMENTS
                      </Text>
                      <Column gap="12">
                        {exp.achievements.map((achievement, i) => (
                          <Row key={i} gap="12" vertical="start">
                            <Flex
                              padding="4"
                              radius="full"
                              background="brand-weak"
                              style={{ marginTop: 6, flexShrink: 0 }}
                            >
                              <Icon name="chevronRight" size="xs" onBackground="brand-strong" />
                            </Flex>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                              {achievement}
                            </Text>
                          </Row>
                        ))}
                      </Column>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Column>
        </Column>
      </Column>

      {/* ==================== EDUCATION SECTION ==================== */}
      <Column
        as="section"
        id="education"
        fillWidth
        paddingX="m"
        paddingY="48"
        horizontal="center"
        className="section-wrapper education-section-bg"
        background="surface"
      >
        <FloatingShapes variant="education" />
        <Column maxWidth="l" fillWidth gap="24" style={{ position: "relative", zIndex: 1 }}>
          <RevealFx translateY={4} delay={0.1}>
            <SectionHeader
              title="Education"
              subtitle="My academic background"
              icon="academic"
            />
          </RevealFx>

          <Flex gap="16" wrap fillWidth>
            {portfolioData.education.map((edu, index) => (
              <RevealFx key={index} translateY={4} delay={0.2 + index * 0.1} style={{ flex: "1 1 280px", minWidth: 250 }}>
                <Card
                  padding="20"
                  radius="xl"
                  fillWidth
                  className="hover-card"
                  background="surface"
                  style={{ height: "100%" }}
                >
                  <Column gap="16" fillWidth>
                    <Row gap="12" vertical="center">
                      <Text style={{ fontSize: 32 }}>{edu.icon}</Text>
                      <Badge background="brand-weak" textVariant="label-strong-xs">
                        {edu.period}
                      </Badge>
                    </Row>
                    <Column gap="8">
                      <Heading variant="heading-strong-m">{edu.degree}</Heading>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {edu.institution}
                      </Text>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Flex>
        </Column>
      </Column>

      {/* ==================== LANGUAGES SECTION ==================== */}
      <Column
        as="section"
        id="languages"
        fillWidth
        paddingX="m"
        paddingY="48"
        horizontal="center"
        className="section-wrapper languages-section-bg"
      >
        <FloatingShapes variant="languages" />
        <Column maxWidth="l" fillWidth gap="24" style={{ position: "relative", zIndex: 1 }}>
          <RevealFx translateY={4} delay={0.1}>
            <SectionHeader
              title="Languages"
              subtitle="Languages I speak"
              icon="language"
            />
          </RevealFx>

          <Flex gap="16" wrap horizontal="center" fillWidth>
            {portfolioData.languages.map((lang, index) => (
              <RevealFx key={index} translateY={4} delay={0.2 + index * 0.1}>
                <Card
                  padding="20"
                  radius="xl"
                  className="hover-card language-card"
                  background="surface"
                  style={{ minWidth: 140 }}
                >
                  <Column gap="12" horizontal="center" align="center">
                    <Text style={{ fontSize: 40 }}>{lang.flag}</Text>
                    <Column gap="4" horizontal="center" align="center">
                      <Text variant="heading-strong-m">{lang.name}</Text>
                      <Badge background="neutral-weak" textVariant="label-default-xs">
                        {lang.level}
                      </Badge>
                    </Column>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Flex>
        </Column>
      </Column>

      {/* ==================== CONTACT SECTION ==================== */}
      <Column
        as="section"
        id="contact"
        fillWidth
        paddingX="m"
        paddingY="48"
        horizontal="center"
        className="section-wrapper contact-bg"
        background="brand-weak"
      >
        <FloatingShapes variant="contact" />
        <Column maxWidth="m" fillWidth gap="24" style={{ position: "relative", zIndex: 1 }}>
          <RevealFx translateY={4} delay={0.1}>
            <Column gap="32" horizontal="center" align="center">
              <Flex
                padding="20"
                radius="full"
                background="brand-medium"
                horizontal="center"
                vertical="center"
              >
                <Icon name="envelope" size="xl" onBackground="brand-strong" />
              </Flex>

              <Column gap="16" horizontal="center" align="center">
                <Heading variant="display-strong-l" align="center">
                  Let's Create Together
                </Heading>
                <Text
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  align="center"
                  wrap="balance"
                >
                  I'm always excited to work on new creative projects. Whether you need stunning graphics,
                  UI/UX design, or visual branding — let's bring your vision to life!
                </Text>
              </Column>

              <Flex gap="16" wrap horizontal="center">
                <Button
                  href={`mailto:${portfolioData.email}`}
                  prefixIcon="envelope"
                  variant="primary"
                  size="l"
                >
                  Email Me
                </Button>
                <Button
                  href={`tel:${portfolioData.phone}`}
                  prefixIcon="phone"
                  variant="secondary"
                  size="l"
                >
                  Call Me
                </Button>
                <Button
                  href={portfolioData.behance}
                  prefixIcon="behance"
                  variant="secondary"
                  size="l"
                  arrowIcon
                >
                  Behance
                </Button>
              </Flex>
            </Column>
          </RevealFx>
        </Column>
      </Column>

      {/* ==================== FOOTER ==================== */}
      <Column
        as="footer"
        fillWidth
        paddingX="l"
        paddingY="32"
        horizontal="center"
        background="surface"
      >
        <Column maxWidth="l" fillWidth>
          <Row fillWidth horizontal="center" vertical="center" gap="8">
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              © 2026 Shilpa Paira
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              •
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" align="center">
              Crafted with creativity & passion
            </Text>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
