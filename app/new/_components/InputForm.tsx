'use client';

import { z } from "zod";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FormInput } from '@/components/hook-form/Input';
import { FormSwitch } from '@/components/hook-form/Switch';
import { FormCheckbox } from '@/components/hook-form/Checkbox';
import { FormDatePicker } from '@/components/hook-form/Datepicker';
import { AutocompleteInput } from '@/components/hook-form/Autocomplete';
import { Card, CardTitle, CardFooter, CardHeader, CardContent } from '@/components/ui/card';
import { Form, FormItem, FormField, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';

// Define the form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  position: z.string().optional(),
  technologies: z.array(z.string()).min(1, { message: 'Please select at least one technology.' }),
  experience: z.array(z.string()).optional(),
  availableForHire: z.boolean().optional(),
  remoteOnly: z.boolean().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  birthDate: z.date().optional(),
  darkMode: z.boolean().optional(),
  emailNotifications: z.boolean().optional(),
  profileVisibility: z.boolean().optional(),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: 'You must agree to the terms and conditions.',
  }),
});

// Define the options for the autocomplete inputs
const techOptions = [
  { label: 'React', value: 'react' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'TailwindCSS', value: 'tailwind' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Node.js', value: 'nodejs' },
  { label: 'Express', value: 'express' },
  { label: 'MongoDB', value: 'mongodb' },
  { label: 'PostgreSQL', value: 'postgresql' },
  { label: 'GraphQL', value: 'graphql' },
];

const experienceOptions = [
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'DevOps', value: 'devops' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'UI/UX', value: 'uiux' },
];

export function FormExample() {
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null);

  // Initialize the form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Inc.',
      position: 'Senior Developer',
      technologies: ['react', 'typescript', 'tailwind'],
      experience: ['frontend'],
      availableForHire: true,
      remoteOnly: false,
      startDate: new Date('2023-01-15'),
      endDate: undefined,
      birthDate: new Date('1990-05-20'),
      darkMode: true,
      emailNotifications: true,
      profileVisibility: false,
      agreeToTerms: false,
    },
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof formSchema>) {
    setFormData(data);
    console.log(data);
  }

  // Function to clear a field
  const clearField = (name: string) => {
    form.setValue(name as keyof z.infer<typeof formSchema>, '');
  };

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Developer Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <FormInput
                  name="name"
                  label="Name"
                  control={ form.control }
                  placeholder="Your name"
                  clearField={ clearField }
                />

                <FormInput
                  name="email"
                  label="Email"
                  control={ form.control }
                  placeholder="Your email"
                  type="email"
                  clearField={ clearField }
                />

                <FormDatePicker
                  name="birthDate"
                  label="Date of Birth"
                  control={ form.control }
                  helperText="Your date of birth"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Professional Information</h3>
                <FormInput
                  name="company"
                  label="Company"
                  control={ form.control }
                  placeholder="Your company"
                  clearField={ clearField }
                />

                <FormInput
                  name="position"
                  label="Position"
                  control={ form.control }
                  placeholder="Your position"
                  clearField={ clearField }
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormDatePicker
                    name="startDate"
                    label="Start Date"
                    control={ form.control }
                    helperText="When did you start your current role"
                  />

                  <FormDatePicker
                    name="endDate"
                    label="End Date"
                    control={ form.control }
                    helperText="Leave empty if current position"
                  />
                </div>

                <FormField
                  control={ form.control }
                  name="technologies"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel>Technologies</FormLabel>
                      <FormControl>
                        <AutocompleteInput
                          options={ techOptions }
                          placeholder="Select technologies..."
                          name={ field.name }
                          control={ form.control }
                        />
                      </FormControl>
                      <FormDescription>Select the technologies you are proficient in.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  ) }
                />

                <FormField
                  control={ form.control }
                  name="experience"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel>Areas of Experience</FormLabel>
                      <FormControl>
                        <AutocompleteInput
                          options={ experienceOptions }
                          placeholder="Select areas of experience..."
                          name={ field.name }
                          control={ form.control }
                        />
                      </FormControl>
                      <FormDescription>Select your areas of expertise.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferences</h3>
                <div className="space-y-4">
                  <FormSwitch
                    name="darkMode"
                    label="Dark Mode"
                    control={ form.control }
                    helperText="Enable dark mode for the application"
                  />

                  <FormSwitch
                    name="emailNotifications"
                    label="Email Notifications"
                    control={ form.control }
                    helperText="Receive email notifications about new opportunities"
                  />

                  <FormSwitch
                    name="profileVisibility"
                    label="Public Profile"
                    control={ form.control }
                    helperText="Make your profile visible to other users"
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormCheckbox
                    name="availableForHire"
                    label="Available for Hire"
                    control={ form.control }
                    helperText="Let recruiters know you're open to opportunities"
                  />

                  <FormCheckbox
                    name="remoteOnly"
                    label="Remote Only"
                    control={ form.control }
                    helperText="Only interested in remote positions"
                  />
                </div>
              </div>

              <Separator />

              <FormCheckbox
                name="agreeToTerms"
                label="I agree to the Terms and Conditions"
                control={ form.control }
                helperText="You must agree to our terms to submit this form"
              />

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={ () => form.reset() }>
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
        { formData ?
          <CardFooter className="flex-col items-start border-t p-4">
            <h3 className="mb-2 font-semibold">Submitted Data:</h3>
            <pre className="w-full overflow-auto rounded-md bg-muted p-4 text-sm">
              { JSON.stringify(formData, null, 2) }
            </pre>
          </CardFooter>
        : null }
      </Card>
    </div>
  );
}
