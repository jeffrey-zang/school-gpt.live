import { BookOpen, GraduationCap, PenTool, TestTube } from "lucide-react"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-slate-800 text-white">
        <a className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6 mr-2 text-slate-300" />
          <span className="font-bold text-slate-100">SchoolGPT</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-slate-300 transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:text-slate-300 transition-colors" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium hover:text-slate-300 transition-colors" href="#waitlist">
            Join Waitlist
          </a>
        </nav>
      </header>
      <main className="mx-auto w-full">
        <section className="w-full mx-auto text-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-slate-800 to-slate-700 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your AI Study Buddy for All Subjects
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl">
                  SchoolGPT helps students excel in homework, assignments, tests, and exams across all subjects.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-slate-100 text-slate-800 hover:bg-slate-200">Get Started</button>
                <button variant="outline" className="text-slate-100 border-slate-100 hover:bg-slate-700">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-slate-800 dark:text-slate-100">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center p-6">
                  <BookOpen className="h-12 w-12 mb-4 text-slate-600 dark:text-slate-300" />
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">Homework Help</h3>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-300">Get step-by-step solutions for any homework problem.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center p-6">
                  <PenTool className="h-12 w-12 mb-4 text-slate-600 dark:text-slate-300" />
                  <h3 className="text-lg text-center font-bold mb-2 text-slate-800 dark:text-slate-100">Assignment Assistance</h3>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-300">Guidance and resources for all your assignments.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center p-6">
                  <TestTube className="h-12 w-12 mb-4 text-slate-600 dark:text-slate-300" />
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">Test Preparation</h3>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-300">Personalized study plans and practice tests.</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center p-6">
                  <GraduationCap className="h-12 w-12 mb-4 text-slate-600 dark:text-slate-300" />
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">Exam Mastery</h3>
                  <p className="text-center text-sm text-slate-600 dark:text-slate-300">Comprehensive exam strategies and review materials.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-slate-700">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-slate-800 dark:text-slate-100">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    "SchoolGPT helped me improve my grades significantly. It's like having a personal tutor available 24/7!"
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">- Sarah J., High School Senior</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    "I love how SchoolGPT breaks down complex problems into easy-to-understand steps. It's a game-changer for my studies."
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">- Mike T., College Freshman</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    "Thanks to SchoolGPT, I feel more confident in my exams. The practice tests are incredibly helpful!"
                  </p>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">- Emily R., Graduate Student</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="waitlist" className="w-full py-12 md:py-24 lg:py-32 bg-slate-300 dark:bg-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800 dark:text-slate-100">Join Our Waitlist</h2>
                <p className="mx-auto max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl">
                  Be among the first to experience the future of learning with SchoolGPT.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="max-w-lg flex-1 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <button type="submit" className="bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-slate-300">Sign Up</button>
                </form>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-slate-800 text-slate-300">
        <p className="text-xs">
          © 2024 SchoolGPT. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App