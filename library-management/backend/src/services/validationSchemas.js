const { z } = require('zod');

const positiveInt = z.coerce.number().int().positive();

const memberSchema = z.object({
  memberName: z.string().min(2).max(200)
});

const bookSchema = z.object({
  title: z.string().min(1).max(250),
  author: z.string().min(1).max(200)
});

const issuanceSchema = z.object({
  memberId: positiveInt,
  bookId: positiveInt,
  issuedDate: z.coerce.date(),
  targetReturnDate: z.coerce.date()
});

module.exports = { memberSchema, bookSchema, issuanceSchema };

