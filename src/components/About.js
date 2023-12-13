import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

export function About() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col w-2/4">
      <Typography className="text-2xl underline">About Us</Typography>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What do you know about us?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Services offered by us
        </AccordionHeader>
        <AccordionBody>
          <ul>
            <li>
              Smart Contract Development: Creating self-executing contracts that
              automate processes based on predefined conditions, reducing the
              need for intermediaries and enhancing transparency.
            </li>
            <li>
              Cryptocurrency Development: Creating new cryptocurrencies or
              tokens, including initial coin offerings (ICOs) or security token
              offerings (STOs), and developing wallets or exchanges
            </li>
            <li>
              Training and Education: Providing educational resources,
              workshops, and training programs to help businesses and
              individuals understand blockchain technology and its applications.
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with blockchain?
        </AccordionHeader>
        <AccordionBody>
          Blockchain technology offers a wide array of possibilities across
          various industries and for personal use. Here are some things you can
          do with blockchain: Cryptocurrencies: Engage in buying, selling,
          trading, or investing in cryptocurrencies like Bitcoin, Ethereum, or
          other altcoins.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
