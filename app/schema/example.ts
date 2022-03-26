import { z } from "zod";

export default z.object({
    body: z.object({
        message: z.string({
            required_error: "A message is required."
        }).min(1),
    })
});
