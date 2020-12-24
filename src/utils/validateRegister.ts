import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
    if (options.email.includes('@')) {
        return [
            {
              field: "email",
              message: "invalid email",
            },
          ]
      }
      if (options.username.length <= 2) {
        return [
            {
              field: "Username",
              message: "length must be greater than 2",
            },
          ]
      }
      if (options.username.includes('@')) {
        return [
            {
              field: "Username",
              message: "cannot include an sign",
            },
          ]
      }
      if (options.password.length <= 3) {
        return [
            {
              field: "password",
              message: "length must be greater than 3",
            },
          ]
      }

      return null
}