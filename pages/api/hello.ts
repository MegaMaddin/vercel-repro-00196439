// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "json2csv";

type Data = {
  csv: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: `Bret's`,
    },
    {
      id: 2,

      name: "Ervin Howell",
      username: "Antonette's",
    },
  ];

  console.log(data);
  console.log(JSON.stringify(data, null, 2));

  const csv = parse(data);

  console.log(csv);
  console.log(JSON.stringify(csv, null, 2));

  res.status(200).json({ csv });
}
