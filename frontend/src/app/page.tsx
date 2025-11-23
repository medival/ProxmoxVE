"use client";
import {
  ArrowRightIcon,
  Zap,
  Shield,
  Users,
  Code2,
  Rocket,
  BookOpen,
  Container,
  Server,
  Cloud,
  Boxes,
  Terminal,
  Package,
  Sparkles,
  TrendingUp,
  Star,
  GitFork,
  Mail
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter, FaDocker } from "react-icons/fa6";
import { SiThreads, SiKubernetes, SiTerraform, SiProxmox } from "react-icons/si";
import { useTheme } from "next-themes";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Particles from "@/components/ui/particles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { basePath } from "@/config/site-config";
import { cn } from "@/lib/utils";

function CustomArrowRightIcon() {
  return <ArrowRightIcon className="h-4 w-4" width={1} />;
}

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const categories = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure",
      description: "Proxmox, monitoring, and system tools",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "Containers",
      description: "Docker, Kubernetes applications",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud & SaaS",
      description: "Self-hosted alternatives to popular services",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development",
      description: "IDEs, Git tools, and developer utilities",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Boxes className="h-8 w-8" />,
      title: "Productivity",
      description: "Office suites, note-taking, and collaboration",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Media & Content",
      description: "Streaming, photo management, and media servers",
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  const platforms = [
    { icon: <SiProxmox className="h-8 w-8" />, name: "Proxmox VE", color: "text-orange-500" },
    { icon: <FaDocker className="h-8 w-8" />, name: "Docker", color: "text-blue-500" },
    { icon: <SiKubernetes className="h-8 w-8" />, name: "Kubernetes", color: "text-blue-600" },
    { icon: <SiTerraform className="h-8 w-8" />, name: "Terraform", color: "text-purple-600" },
    { icon: <Terminal className="h-8 w-8" />, name: "Shell Script", color: "text-green-500" },
  ];

  return (
    <>
      <div className="w-full mt-16">
        <Particles className="absolute inset-0 -z-40" quantity={100} ease={80} color={color} refresh />
        <div className="container mx-auto px-4">
          {/* Enhanced Hero Section */}
          <div className="flex min-h-[90vh] flex-col items-center justify-center gap-8 py-20 lg:py-32">
            <Dialog>
              <DialogTrigger>
                <div className="mb-2">
                  <AnimatedGradientText>
                    <div
                      className={cn(
                        `absolute inset-0 block size-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
                        `p-px ![mask-composite:subtract]`,
                      )}
                    />
                    <Sparkles className="h-4 w-4" />
                    <Separator className="mx-2 h-4" orientation="vertical" />
                    <span
                      className={cn(
                        `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        `inline`,
                      )}
                    >
                      Your Daily FOSS Discovery Platform
                    </span>
                    <Separator className="mx-2 h-4" orientation="vertical" />
                    <TrendingUp className="h-4 w-4" />
                  </AnimatedGradientText>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>About Daily FOSS</DialogTitle>
                  <DialogDescription>
                    Daily FOSS is your go-to platform for discovering and deploying free and open source software.
                    We curate the best FOSS projects with easy deployment options across multiple platforms.
                  </DialogDescription>
                </DialogHeader>
                <CardFooter className="flex flex-col gap-2">
                  <Button className="w-full" asChild>
                    <a
                      href={`https://github.com/community-scripts/${basePath}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </DialogContent>
            </Dialog>

            <div className="flex flex-col gap-8 items-center max-w-5xl">
              <h1 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                Deploy
                {" "}
                <span className="bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent animate-gradient bg-[length:var(--bg-size)_100%]">
                  Open Source
                </span>
                <br />
                Tools in Seconds
              </h1>
              <p className="max-w-3xl text-center text-xl leading-relaxed text-muted-foreground md:text-2xl">
                Discover curated free and open source software with one-command deployments.
                From Proxmox scripts to Docker containers, we make self-hosting effortless.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/scripts">
                <Button
                  size="lg"
                  variant="expandIcon"
                  Icon={CustomArrowRightIcon}
                  iconPlacement="right"
                  className="text-lg px-8 py-6 h-auto"
                >
                  Browse 200+ Tools
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 h-auto">
                <a
                  href={`https://github.com/community-scripts/${basePath}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Community Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="h-4 w-4 text-blue-500" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-purple-500" />
                <span>Active Maintenance</span>
              </div>
            </div>
          </div>

          {/* Interactive Categories Section */}
          <div className="py-24 border-y">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
                Explore by Category
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find the perfect tool for your needs across different categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <Link href="/scripts" key={index}>
                  <Card className="border-2 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group h-full">
                    <CardHeader>
                      <div className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                        category.gradient,
                        "text-white"
                      )}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Support Section */}
          <div className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
                Deploy Anywhere
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multiple deployment methods to fit your infrastructure
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group">
                  <CardHeader className="text-center items-center">
                    <div className={cn("mb-3 group-hover:scale-110 transition-transform", platform.color)}>
                      {platform.icon}
                    </div>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Features Section */}
          <div className="py-24 border-t" id="features">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
                Why Choose Daily FOSS?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to discover, evaluate, and deploy open source software
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffaa40]/20 to-[#9c40ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-7 w-7 text-[#ffaa40]" />
                  </div>
                  <CardTitle className="text-xl">One-Command Deploy</CardTitle>
                  <CardDescription className="text-base">
                    Copy, paste, run. Deploy applications in seconds with our pre-configured scripts and containers.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9c40ff]/20 to-[#ffaa40]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-7 w-7 text-[#9c40ff]" />
                  </div>
                  <CardTitle className="text-xl">Security First</CardTitle>
                  <CardDescription className="text-base">
                    Every tool is vetted for security vulnerabilities and maintained with the latest updates.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffaa40]/20 to-[#9c40ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-[#ffaa40]" />
                  </div>
                  <CardTitle className="text-xl">Community Driven</CardTitle>
                  <CardDescription className="text-base">
                    Join thousands of users and contributors building the future of open source deployment.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9c40ff]/20 to-[#ffaa40]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-7 w-7 text-[#9c40ff]" />
                  </div>
                  <CardTitle className="text-xl">Rich Documentation</CardTitle>
                  <CardDescription className="text-base">
                    Detailed guides, default credentials, configuration examples, and troubleshooting tips.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffaa40]/20 to-[#9c40ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="h-7 w-7 text-[#ffaa40]" />
                  </div>
                  <CardTitle className="text-xl">Multi-Platform</CardTitle>
                  <CardDescription className="text-base">
                    From bare metal to cloud, containers to VMs - deploy on your preferred infrastructure.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9c40ff]/20 to-[#ffaa40]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-7 w-7 text-[#9c40ff]" />
                  </div>
                  <CardTitle className="text-xl">Always Fresh</CardTitle>
                  <CardDescription className="text-base">
                    Daily updates with new applications, features, and improvements to keep you ahead.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="py-24 border-t">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-[#ffaa40]/10 to-[#9c40ff]/10 rounded-2xl border-2 p-12">
                <Mail className="h-12 w-12 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Get notified about new tools, features, and FOSS discoveries. Join our community newsletter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-base h-12"
                  />
                  <Button size="lg" className="h-12 px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="py-16 border-t">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl mb-6">
                Connect With Us
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://linkedin.com/company/dailyfoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 hover:border-primary/50 transition-all group"
                >
                  <FaLinkedin className="h-5 w-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://facebook.com/dailyfoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 hover:border-primary/50 transition-all group"
                >
                  <FaFacebook className="h-5 w-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="https://threads.net/@dailyfoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 hover:border-primary/50 transition-all group"
                >
                  <SiThreads className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Threads</span>
                </a>
                <a
                  href="https://x.com/dailyfoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 hover:border-primary/50 transition-all group"
                >
                  <FaXTwitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">X (Twitter)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="py-24 pb-32">
            <div className="max-w-5xl mx-auto text-center border-2 rounded-3xl p-16 bg-gradient-to-br from-[#ffaa40]/10 via-[#9c40ff]/10 to-[#ffaa40]/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-xl mb-10 max-w-3xl mx-auto">
                  Join thousands of users deploying open source software with ease.
                  Start exploring our collection of 200+ curated tools today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/scripts">
                    <Button
                      size="lg"
                      variant="expandIcon"
                      Icon={CustomArrowRightIcon}
                      iconPlacement="right"
                      className="text-lg px-10 py-7 h-auto"
                    >
                      Explore All Tools
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" asChild className="text-lg px-10 py-7 h-auto">
                    <a
                      href={`https://github.com/community-scripts/${basePath}/blob/main/CONTRIBUTING.md`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitFork className="mr-2 h-5 w-5" />
                      Contribute
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
