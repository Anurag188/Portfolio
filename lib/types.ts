import {z} from 'zod'

export const contactSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    subject:z.string().min(5,"Subject Must be greater than 5 characters"),
    message:z.string().min(10, "Message must be greater than 10 characters!")
  })
  
export   type TcontactSchema = z.infer<typeof contactSchema>;