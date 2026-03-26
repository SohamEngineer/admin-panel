import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Calendar } from "lucide-react"
import { Control } from "react-hook-form"

type FieldConfig = {
  name: string
  placeholder: string
  span?: number
  type?: "text" | "date"
}

type Props = {
  fields: FieldConfig[]
  control: Control<any>
}

export function ShadcnFormFields({ fields, control }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map((field) => (
        <div
          key={field.name}
          className={`space-y-2 ${
            field.span === 2 ? "md:col-span-2" : ""
          }`}
        >
          <FormField
            control={control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...formField}
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                    />
                    {field.type === "date" && (
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      ))}
    </div>
  )
}
