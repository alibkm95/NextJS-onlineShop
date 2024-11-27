import { TicketType } from "@/types";
import React from "react";
import DataTable from "./tableContainer/DataTable";
import { dateRangeFilter, emailFilter, TicketColumns } from "./tableColumns/TicketColumns";

const TicketsTable = () => {
  const fakeTickets: TicketType[] = [
    {
      _id: "01JDP9Q9DSBNHNER09FNC41TAS",
      subject: "Nondisp spiral fx shaft of l tibia, 7thK",
      status: "answered",
      creator: {
        _id: "01JDP9Q9QRX1EY6J7MEPYEYQ4B",
        fullName: "Colleen Cleeton",
        email: "ccleeton0@simplemachines.org",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-16T00:55:54Z",
      updatedAt: "2024-11-26T11:16:09Z",
    },
    {
      _id: "01JDP9Q9QV1TH7Q7ZJGBJ75VC7",
      subject: "Prsnl hx of malig neoplm of lymphoid, hematpoetc & rel tiss",
      status: "answered",
      creator: {
        _id: "01JDP9Q9QW4DT04EYXDK62JSFZ",
        fullName: "Hoebart Gellan",
        email: "hgellan1@com.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-18T02:28:00Z",
      updatedAt: "2024-08-01T10:00:28Z",
    },
    {
      _id: "01JDP9Q9QYHRSWMVBHJS8BAC69",
      subject: "Other intervertebral disc degeneration, thoracic region",
      status: "pending",
      creator: {
        _id: "01JDP9Q9QY30Y49A79JFS8WKWZ",
        fullName: "Sol Boulden",
        email: "sboulden2@people.com.cn",
        avatar: "/images/user.png",
      },
      createdAt: "2024-11-07T02:20:40Z",
      updatedAt: "2024-10-17T23:17:05Z",
    },
    {
      _id: "01JDP9Q9R02NWWM7VY3VT6P2Y3",
      subject: "Corros first deg mult sites of lower limb, except ank/ft",
      status: "answered",
      creator: {
        _id: "01JDP9Q9R1EY0NRFFAHANYEB9N",
        fullName: "Roz Zelake",
        email: "rzelake3@shareasale.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-16T13:40:44Z",
      updatedAt: "2024-11-10T18:16:00Z",
    },
    {
      _id: "01JDP9Q9R3PRZ16JYYCN275HBA",
      subject: "Sltr-haris Type II physl fx lower end radius, unsp arm, init",
      status: "closed",
      creator: {
        _id: "01JDP9Q9R4X2DCTBQY22N4SXVD",
        fullName: "Constantia Gillaspy",
        email: "cgillaspy4@java.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-18T20:08:50Z",
      updatedAt: "2024-09-12T21:18:44Z",
    },
    {
      _id: "01JDP9Q9R5A052D11S4YRW2VVM",
      subject: "Nondisp commnt fx shaft of ulna, r arm, 7thB",
      status: "pending",
      creator: {
        _id: "01JDP9Q9R5C8KBTFDY28Z9FTSN",
        fullName: "Moss Culpen",
        email: "mculpen5@photobucket.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-11-07T17:29:30Z",
      updatedAt: "2024-10-07T21:32:52Z",
    },
    {
      _id: "01JDP9Q9R6RQ02SGJSX024FVAZ",
      subject: "Corros first deg of shldr/up lmb, except wrs/hnd unsp site",
      status: "closed",
      creator: {
        _id: "01JDP9Q9R69GZ5P4F85BC4DJR6",
        fullName: "Farrah Rippingale",
        email: "frippingale6@shop-pro.jp",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-03T17:01:07Z",
      updatedAt: "2024-11-03T18:51:57Z",
    },
    {
      _id: "01JDP9Q9R70FDGTVEMHFDHYSAJ",
      subject: "Other fracture of right great toe, sequela",
      status: "closed",
      creator: {
        _id: "01JDP9Q9R77WHJ8H7HNZH91JFW",
        fullName: "Janey Willishire",
        email: "jwillishire7@cyberchimps.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-18T02:32:40Z",
      updatedAt: "2024-07-31T21:34:05Z",
    },
    {
      _id: "01JDP9Q9R8ZMHG3FP0YYJNZYQ0",
      subject: "Driver of 3-whl mv inj in clsn w 2/3-whl mv nontraf, subs",
      status: "pending",
      creator: {
        _id: "01JDP9Q9R8D48YNY0D6X9WB1V9",
        fullName: "Rhianon O'Sharry",
        email: "rosharry8@wufoo.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-14T03:10:26Z",
      updatedAt: "2024-09-23T03:39:26Z",
    },
    {
      _id: "01JDP9Q9R9X3D9W72RRVJ352SN",
      subject: "Complete traumatic MCP amputation of thmb, init",
      status: "pending",
      creator: {
        _id: "01JDP9Q9RATJJA323AQMDHD2Z7",
        fullName: "Gerik Worms",
        email: "gworms9@paypal.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-09-23T10:36:11Z",
      updatedAt: "2024-10-25T15:59:17Z",
    },
    {
      _id: "01JDP9Q9RBY6KGG8063Z4N2YDP",
      subject: "Person injured in clsn betw hv veh and bus, nontraf, init",
      status: "answered",
      creator: {
        _id: "01JDP9Q9RCET8T8KZN9ZKP9X39",
        fullName: "Bonnibelle Phillcox",
        email: "bphillcoxa@omniture.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-04T10:30:36Z",
      updatedAt: "2024-11-08T01:38:17Z",
    },
    {
      _id: "01JDP9Q9RD4PF5C7K2FHT3EAEA",
      subject: "Bone donor",
      status: "answered",
      creator: {
        _id: "01JDP9Q9REE6V69S3W5SE5408J",
        fullName: "Nicolea Gosland",
        email: "ngoslandb@addtoany.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-06T22:52:57Z",
      updatedAt: "2024-08-28T09:28:33Z",
    },
    {
      _id: "01JDP9Q9REPW4R4WT1013EJ670",
      subject: "Poisoning by other narcotics, undetermined, subs encntr",
      status: "closed",
      creator: {
        _id: "01JDP9Q9RFG03TRBFGMVG3CYP5",
        fullName: "Dalt Bevir",
        email: "dbevirc@blogger.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-11-19T13:49:16Z",
      updatedAt: "2024-08-27T18:29:59Z",
    },
    {
      _id: "01JDP9Q9RGMC29CPHWQ98V4YFD",
      subject: "Oth exposure to controlled fire, not in bldg, sequela",
      status: "answered",
      creator: {
        _id: "01JDP9Q9RGDZQCJ54YG1XV9EFV",
        fullName: "Robina Dictus",
        email: "rdictusd@hatena.ne.jp",
        avatar: "/images/user.png",
      },
      createdAt: "2024-09-25T11:47:28Z",
      updatedAt: "2024-10-22T00:01:29Z",
    },
    {
      _id: "01JDP9Q9RHZREHZ887671CHSSD",
      subject: "Other specified injuries of wrist, hand and finger(s)",
      status: "answered",
      creator: {
        _id: "01JDP9Q9RHNMNKH4V634F9ANDS",
        fullName: "Kassie McKirton",
        email: "kmckirtone@ucoz.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-13T15:31:07Z",
      updatedAt: "2024-09-27T19:53:55Z",
    },
    {
      _id: "01JDP9Q9RJYKDAWKPQXEYZ0QSP",
      subject: "Corros 3rd deg mu sites of left shldr/up lmb, except wrs/hnd",
      status: "pending",
      creator: {
        _id: "01JDP9Q9RJS72GRETQQYQ361JS",
        fullName: "Esta Antwis",
        email: "eantwisf@newsvine.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-10T06:39:20Z",
      updatedAt: "2024-11-07T23:20:56Z",
    },
    {
      _id: "01JDP9Q9RK6SHW5ZY7XWYSD9NQ",
      subject: "Abnormal radiolog finding on antenatal screening of mother",
      status: "closed",
      creator: {
        _id: "01JDP9Q9RMCNY0EDPBSPJRQKHD",
        fullName: "Arne Manders",
        email: "amandersg@gmpg.org",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-23T10:25:48Z",
      updatedAt: "2024-07-29T20:43:47Z",
    },
    {
      _id: "01JDP9Q9RNRDFXHWQQ60WG5N5G",
      subject: "Pasngr in pk-up/van inj in clsn w statnry obj in traf, sqla",
      status: "closed",
      creator: {
        _id: "01JDP9Q9RNP1WTX6NAZ47QFNJG",
        fullName: "Gelya Ducarel",
        email: "gducarelh@fc2.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-10-14T06:48:52Z",
      updatedAt: "2024-10-24T17:10:00Z",
    },
    {
      _id: "01JDP9Q9RPVV5ZH63EYSK34RHR",
      subject: "Nondisp fx of shaft of first metacarpal bone, left hand",
      status: "closed",
      creator: {
        _id: "01JDP9Q9RP7TYG3CJYV2438YC6",
        fullName: "Tobey Di Giacomettino",
        email: "tdii@gov.uk",
        avatar: "/images/user.png",
      },
      createdAt: "2024-11-02T16:28:51Z",
      updatedAt: "2024-10-28T18:51:34Z",
    },
    {
      _id: "01JDP9Q9RRXQBSCPADJGQBX0WV",
      subject: "Melanoma in situ of lower limb, including hip",
      status: "answered",
      creator: {
        _id: "01JDP9Q9RS183KJYPXS87R7TXJ",
        fullName: "Giuditta Kirkbride",
        email: "gkirkbridej@apple.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-11-14T04:21:09Z",
      updatedAt: "2024-08-10T15:19:06Z",
    },
    {
      _id: "01JDP9Q9RT03RM12H2QTD9BZGP",
      subject: "Adverse effect of calcium-channel blockers, subs encntr",
      status: "pending",
      creator: {
        _id: "01JDP9Q9RVD44D6Q4B8B6YNZ6C",
        fullName: "Maible Lines",
        email: "mlinesk@pinterest.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-09-30T10:41:39Z",
      updatedAt: "2024-07-30T13:39:07Z",
    },
    {
      _id: "01JDP9Q9RWN0AWQ6A8KRQGTWM0",
      subject: "Disp fx of lunate, left wrist, subs for fx w malunion",
      status: "answered",
      creator: {
        _id: "01JDP9Q9RXDHQ0M2B5EZNF9M1J",
        fullName: "Ruddy Verbeke",
        email: "rverbekel@is.gd",
        avatar: "/images/user.png",
      },
      createdAt: "2024-09-17T17:31:28Z",
      updatedAt: "2024-08-05T12:34:38Z",
    },
    {
      _id: "01JDP9Q9RYXYE6T1B9X7GYBTTF",
      subject: "Injury of unsp nerve at forearm level, left arm, subs encntr",
      status: "closed",
      creator: {
        _id: "01JDP9Q9RZQ6F6TQ4NK2YBY026",
        fullName: "Bert Beckson",
        email: "bbecksonm@is.gd",
        avatar: "/images/user.png",
      },
      createdAt: "2024-11-14T17:43:05Z",
      updatedAt: "2024-09-27T05:13:12Z",
    },
    {
      _id: "01JDP9Q9S020JQHNNR80FYV6Q7",
      subject: "Lacerat musc/tend post grp at low leg level, unsp leg, init",
      status: "closed",
      creator: {
        _id: "01JDP9Q9S1KVYQQ46ZRWTEAHBJ",
        fullName: "Ertha Lemm",
        email: "elemmn@surveymonkey.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-08-05T14:15:03Z",
      updatedAt: "2024-08-01T17:09:29Z",
    },
    {
      _id: "01JDP9Q9S26GT35447GV74C48M",
      subject: "Ventricular fibrillation and flutter",
      status: "answered",
      creator: {
        _id: "01JDP9Q9S2WJD16BYJ6CQGE4A9",
        fullName: "Annnora Brigden",
        email: "abrigdeno@marriott.com",
        avatar: "/images/user.png",
      },
      createdAt: "2024-09-19T10:28:35Z",
      updatedAt: "2024-10-28T16:51:30Z",
    },
  ];

  return (
    <DataTable
      tableData={fakeTickets}
      dataColumnsDef={TicketColumns}
      filterFns={{ emailFilter, dateRangeFilter }}
    />
  );
};

export default TicketsTable;
