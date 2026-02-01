"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { registrationSchema, RegistrationValues } from "@/lib/validations/registration";
import { registerTeam } from "@/lib/actions/register";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Ensure progress component exists or use simple div

export function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RegistrationValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamName: "",
      captainName: "",
      email: "",
      robotName: "",
      weightClass: "Middleweight", // Default
      tacticalDescription: "",
      safetyCheck: false,
    },
    mode: "onChange",
  });

  const { trigger, handleSubmit } = form;

  const nextStep = async () => {
    const fieldsStep1 = ["teamName", "captainName", "email"] as const;
    const isValid = await trigger(fieldsStep1);
    if (isValid) setStep(2);
  };

  const prevStep = () => setStep(1);

  const onSubmit: import("react-hook-form").SubmitHandler<RegistrationValues> = async (data) => {
    setIsPending(true);
    setError(null);
    
    try {
      const res = await registerTeam(data);
      if (res.success) {
        setSuccess(true);
      } else {
        setError(res.error || "Unknown error occurred");
      }
    } catch (err) {
      setError("Transmission failed. Connection interrupted.");
    } finally {
      setIsPending(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto p-8 rounded-2xl glass-card text-center border-teal-400"
      >
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-teal-400/20 flex items-center justify-center border border-teal-400 shadow-[0_0_20px_#00f3ff]">
            <CheckCircle2 className="h-10 w-10 text-teal-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Registration Complete</h2>
        <p className="text-muted-foreground mb-6">
          Unit <span className="text-teal-400 font-mono font-bold">{form.getValues("robotName")}</span> has been logged in the mainframe. Awaiting classification audit.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
          Register Another Unit
        </Button>
      </motion.div>
    );
  }

  return (
    <Card className="glass-card border-white/10 max-w-2xl mx-auto overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[size:20px_20px] opacity-10 pointer-events-none" />
      
      {isPending && (
         <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center">
             <Loader2 className="h-12 w-12 text-teal-400 animate-spin mb-4" />
             <p className="text-teal-400 font-mono animate-pulse">TRANSMITTING DATA TO MAINFRAME...</p>
         </div>
      )}

      <CardHeader>
        <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-2xl font-bold text-white">
                Unit Registration <span className="text-teal-400">v2.6</span>
            </CardTitle>
            <span className="font-mono text-xs text-muted-foreground">Step 0{step} / 02</span>
        </div>
        <Progress value={step === 1 ? 50 : 100} className="h-1 bg-white/10 [&>div]:bg-teal-400 [&>div]:shadow-[0_0_10px_#00f3ff]" />
      </CardHeader>

      <CardContent className="pt-6 relative z-10">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="teamName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Team Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Cobra Dynamics" className="bg-black/30 border-white/10 text-white focus:border-teal-400 transition-colors" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="captainName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Captain Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. John Connor" className="bg-black/30 border-white/10 text-white focus:border-teal-400 transition-colors" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Contact Frequency (Email)</FormLabel>
                        <FormControl>
                          <Input placeholder="captain@resistance.net" className="bg-black/30 border-white/10 text-white focus:border-teal-400 transition-colors" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                   <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="robotName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Unit Identifier (Robot Name)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. T-800" className="bg-black/30 border-white/10 text-white focus:border-teal-400 transition-colors" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="weightClass"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Weight Classification</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/30 border-white/10 text-white focus:ring-teal-400">
                                  <SelectValue placeholder="Select class" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Lightweight">Lightweight (60kg)</SelectItem>
                                <SelectItem value="Middleweight">Middleweight (110kg)</SelectItem>
                                <SelectItem value="Heavyweight">Heavyweight (250kg)</SelectItem>
                                <SelectItem value="Super Heavyweight">Super Heavyweight (Uncapped)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                   </div>
                   <FormField
                      control={form.control}
                      name="tacticalDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Tactical Description</FormLabel>
                          <FormControl>
                            <Textarea 
                                placeholder="Describe weaponry and mobility systems..." 
                                className="bg-black/30 border-white/10 text-white focus:border-teal-400 min-h-[100px]" 
                                {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="safetyCheck"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-white/10 p-4 bg-white/5">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-teal-400 border-white/30"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-white">
                              Safety Protocol Compliance
                            </FormLabel>
                            <FormDescription className="text-xs">
                              I certify that this unit complies with all Section 9 safety regulations.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                </div>
            )}
            
            <div className="flex justify-between pt-4 border-t border-white/10">
                {step === 2 ? (
                    <Button type="button" variant="ghost" onClick={prevStep} className="text-white hover:text-teal-400">
                        Back
                    </Button>
                ) : (
                    <div />
                )}
                
                {step === 1 ? (
                    <Button type="button" onClick={nextStep} className="bg-teal-400 text-black hover:bg-teal-500 font-bold ml-auto">
                        Next Phase
                    </Button>
                ) : (
                    <Button type="submit" disabled={isPending} className="bg-teal-400 text-black hover:bg-teal-500 font-bold shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                        {isPending ? "Transmitting..." : "Initialize Registration"}
                    </Button>
                )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
