import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeInView } from '@/components/animations/FadeInView';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

export const ContactSection = () => {
  return (
    <SectionContainer id="contact">
      <FadeInView>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
          <p className="text-center text-muted-foreground max-w-2xl mb-12">
            Interested in collaborating on AI projects or discussing opportunities? Feel free to reach out!
          </p>

          <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl mb-12">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={link.platform}
                    >
                      {link.icon === 'Github' && <Github className="h-6 w-6" />}
                      {link.icon === 'Linkedin' && <Linkedin className="h-6 w-6" />}
                      {link.icon === 'Mail' && <Mail className="h-6 w-6" />}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Button asChild size="lg" variant="default" className="gap-2">
            <a href="/resume/Abhijit_Rao_Resume.pdf" download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </FadeInView>
    </SectionContainer>
  );
};
