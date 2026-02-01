import { RegistrationForm } from "@/components/form/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-screen relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-[100px] -z-10" />
       <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">Registration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure your spot in the arena. Technical specifications will be encrypted and transmitted to the central mainframe.
          </p>
        </div>
        
        <RegistrationForm />
      </div>
    </div>
  );
}
