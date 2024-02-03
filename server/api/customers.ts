import { serverSupabaseUser } from "#supabase/server";

const adminInfo = [
  {
    id: 0,
    name: "Bishal Mishra",
    email: "bishal1999mishra@gmail.com",
    customers: [
      { name: "Lucinda Meyer", email: "apasa@elodoow.iq", balance: 976 },
      { name: "Ernest Soto", email: "soajufo@di.sx", balance: 2504 },
      { name: "Glen Murray", email: "iba@la.gb", balance: 1858 },
      { name: "Ola Vasquez", email: "ra@efrisul.at", balance: 3462 },
      {
        name: "Maurice Montgomery",
        email: "fijuzlop@pohefiv.hr",
        balance: 2226,
      },
    ],
  },
  {
    id: 1,
    name: "Bess Lawrence",
    email: "cepom@cedi.uk",
    customers: [
      { name: "Mason Sullivan", email: "ra@gaw.sr", balance: 1848 },
      { name: "Daniel Bell", email: "bobawara@sacodo.mc", balance: 2202 },
      { name: "Jack Carlson", email: "pilviron@aclufe.pw", balance: 1966 },
      { name: "Frank Arnold", email: "lekehi@fovohcul.il", balance: 2604 },
      {
        name: "Maurice Montgomery",
        email: "fijuzlop@pohefiv.hr",
        balance: 2226,
      },
    ],
  },
  {
    id: 2,
    name: "Lettie Love",
    email: "miz@raop.bb",
    customers: [
      { name: "Elmer Figueroa", email: "becir@ek.as", balance: 2562 },
      { name: "Winnie Clayton", email: "vivow@kipreudu.tt", balance: 1307 },
      { name: "Jeremy Chambers", email: "ni@uhi.om", balance: 1958 },
      { name: "Nelle Newman", email: "bos@fasla.kw", balance: 1764 },
      {
        name: "Maurice Montgomery",
        email: "fijuzlop@pohefiv.hr",
        balance: 2226,
      },
    ],
  },
  {
    id: 3,
    name: "Johnny King",
    email: "sobhibcic@pub.mm",
    customers: [
      { name: "Lillian Knight", email: "wupin@ripi.bg", balance: 2731 },
      { name: "Roxie Carlson", email: "ecgafhi@juf.th", balance: 796 },
      { name: "Cole Rose", email: "taop@mori.tc", balance: 1803 },
      { name: "Mike Montgomery", email: "fi@sesurdib.za", balance: 1981 },
      {
        name: "Maurice Montgomery",
        email: "fijuzlop@pohefiv.hr",
        balance: 2226,
      },
    ],
  },
];

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  if (!user)
    throw createError({
      statusCode: 401,
      message: "Unauthorized Access",
    });
  return adminInfo.find((u) => u.email === user.email);
});
