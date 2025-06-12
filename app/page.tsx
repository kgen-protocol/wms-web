"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Trophy,
  Gift,
  ShoppingCart,
  Users,
  Zap,
  Target,
  Mail,
  MapPin,
  Gamepad2,
  Coins,
  Star,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WhiteMartech Solutions</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="#dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">B2C SaaS Gaming Solutions</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionize Gaming
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Engagement
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Empower game publishers with our comprehensive suite of engagement tools. Drive player acquisition,
            retention, and monetization through gamified experiences and reward systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Suite</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three powerful products working together to create the ultimate gaming engagement ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* K-Quest */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">K-Quest</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Interactive Quest System for Enhanced Player Engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">In-Game Challenges</h4>
                      <p className="text-sm text-gray-600">
                        Create engaging quests that reward players with K Cash tokens
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Leaderboard System</h4>
                      <p className="text-sm text-gray-600">
                        Drive competition and boost player retention through rankings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Publisher Benefits</h4>
                      <p className="text-sm text-gray-600">
                        Acquire highly engaged players and increase session duration
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Badge variant="secondary" className="bg-green-50 text-green-700">
                    <Coins className="h-3 w-3 mr-1" />
                    Earn K Cash Tokens
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* K-Drop */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Gift className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">K-Drop</CardTitle>
                </div>
                <CardDescription className="text-base">Viral Airdrop Campaigns for Maximum Engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Viral Campaigns</h4>
                      <p className="text-sm text-gray-600">
                        Launch airdrop campaigns that spread organically across communities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Exclusive Rewards</h4>
                      <p className="text-sm text-gray-600">
                        Offer limited-time rewards that create urgency and excitement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Growth</h4>
                      <p className="text-sm text-gray-600">
                        Drive user acquisition through social sharing and referrals
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Badge variant="secondary" className="bg-purple-50 text-purple-700">
                    <Gift className="h-3 w-3 mr-1" />
                    Exclusive Airdrops
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* K-Store */}
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">K-Store</CardTitle>
                </div>
                <CardDescription className="text-base">Token Redemption Marketplace for Real Value</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <ShoppingCart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Token Redemption</h4>
                      <p className="text-sm text-gray-600">Convert K Cash tokens into real and digital items</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Value Loop</h4>
                      <p className="text-sm text-gray-600">Complete the engagement cycle with tangible rewards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Continued Participation</h4>
                      <p className="text-sm text-gray-600">Incentivize long-term engagement through valuable rewards</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Real & Digital Items
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Dashboard</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive analytics and management tools to track performance and optimize your gaming engagement
              strategies
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <Image
                  src="/gaming-dashboard.png"
                  alt="WhiteMartech Solutions Dashboard"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Monitor quest completion rates, player engagement, and token distribution in real-time
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">User Management</h3>
                <p className="text-gray-600 text-sm">
                  Manage player profiles, track achievements, and analyze user behavior patterns
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Token Economics</h3>
                <p className="text-gray-600 text-sm">
                  Track K Cash distribution, redemption rates, and overall token economy health
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Game?</h2>
            <p className="text-xl text-gray-600">
              Get in touch with our team to discuss how WhiteMartech Solutions can enhance your gaming platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">developer@whitemartech.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Company</p>
                    <p className="text-gray-600">WhiteMartech Solutions Private Limited</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose WhiteMartech?</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Proven engagement solutions for gaming platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Comprehensive analytics and reporting tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>Dedicated support and consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <div>
                <div className="text-lg font-bold">WhiteMartech Solutions</div>
                <div className="text-sm text-gray-400">Private Limited</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Contact us for integration</p>
              <p className="text-blue-400">developer@whitemartech.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} WhiteMartech Solutions Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
