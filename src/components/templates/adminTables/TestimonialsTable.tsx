import React from "react";
import DataTable from "./tableContainer/DataTable";
import { TestimonialType } from "@/types";
import { dateRangeFilter, testimonialColumns } from "./tableColumns/TestimonialColumns";

const TestimonialsTable = () => {
  const fakeTestimonials: TestimonialType[] = [
    {
      _id: "01JDS1K7R8VCBTCNH3HH4ZDTSJ",
      textContent:
        "Bypass Left Internal Iliac Artery to Left External Iliac Artery with Autologous Venous Tissue, Percutaneous Endoscopic Approach",
      senderName: "Joyann Maslin",
      senderEmail: "jmaslin0@narod.ru",
      senderAvatar: "/images/user.png",
      createdAt: "2024-09-02T01:04:22Z",
      updatedAt: "2024-10-30T11:37:54Z",
    },
    {
      _id: "01JDS1K7RA849A37KKS94C3YHH",
      textContent: "Repair Right Conjunctiva, External Approach",
      senderName: "Egor Benneyworth",
      senderEmail: "ebenneyworth1@t.co",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-17T11:59:40Z",
      updatedAt: "2024-11-17T18:50:46Z",
    },
    {
      _id: "01JDS1K7RBMBG77MMVPED9WNM3",
      textContent:
        "Dilation of Left Common Iliac Artery with Four or More Drug-eluting Intraluminal Devices, Percutaneous Endoscopic Approach",
      senderName: "Art Oldroyde",
      senderEmail: "aoldroyde2@gravatar.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-21T01:14:37Z",
      updatedAt: "2024-11-04T12:41:24Z",
    },
    {
      _id: "01JDS1K7RCNJS91XGXFFM2CFNR",
      textContent:
        "Removal of Autologous Tissue Substitute from Left Breast, Open Approach",
      senderName: "Delora Ruckman",
      senderEmail: "druckman3@answers.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-14T02:56:57Z",
      updatedAt: "2024-08-02T05:08:40Z",
    },
    {
      _id: "01JDS1K7RDFXJTZ5NX1VKRSSV2",
      textContent: "Excision of Right Elbow Bursa and Ligament, Open Approach",
      senderName: "Saree McDonand",
      senderEmail: "smcdonand4@omniture.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-26T17:08:57Z",
      updatedAt: "2024-10-25T15:48:42Z",
    },
    {
      _id: "01JDS1K7RE73K1HMHRPT1RCZ2H",
      textContent:
        "Revision of Drainage Device in Left Shoulder Joint, Percutaneous Approach",
      senderName: "Ros Steer",
      senderEmail: "rsteer5@ihg.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-01T21:14:00Z",
      updatedAt: "2024-10-20T06:14:06Z",
    },
    {
      _id: "01JDS1K7RFB363ZWGQZEE37Z1R",
      textContent:
        "Fluoroscopy of Left Common Carotid Artery using High Osmolar Contrast",
      senderName: "Robenia Brugden",
      senderEmail: "rbrugden6@twitpic.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-20T12:04:08Z",
      updatedAt: "2024-10-11T23:17:54Z",
    },
    {
      _id: "01JDS1K7RG347MD5WFGJKGKTQV",
      textContent:
        "Revision of Synthetic Substitute in Thoracic Vertebral Joint, Open Approach",
      senderName: "Petra O'Teague",
      senderEmail: "poteague7@utexas.edu",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-17T13:28:32Z",
      updatedAt: "2024-10-11T11:58:41Z",
    },
    {
      _id: "01JDS1K7RHA98HXJGNDJ9XJNFF",
      textContent:
        "Bypass Ileum to Ascending Colon with Autologous Tissue Substitute, Percutaneous Endoscopic Approach",
      senderName: "Prue Chardin",
      senderEmail: "pchardin8@oracle.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-08-30T21:09:26Z",
      updatedAt: "2024-09-29T14:59:00Z",
    },
    {
      _id: "01JDS1K7RHDXR02Q26JRCENHC8",
      textContent:
        "Revision of Radioactive Element in Right Pleural Cavity, Percutaneous Endoscopic Approach",
      senderName: "Lissie Targett",
      senderEmail: "ltargett9@amazon.co.jp",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-13T10:43:34Z",
      updatedAt: "2024-11-16T01:02:14Z",
    },
    {
      _id: "01JDS1K7RJ1N0HTBMEZVSRYDHG",
      textContent:
        "Revision of Interbody Fusion Device in Lumbar Vertebral Joint, Open Approach",
      senderName: "Kathie Backen",
      senderEmail: "kbackena@friendfeed.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-27T22:43:16Z",
      updatedAt: "2024-09-24T07:52:09Z",
    },
    {
      _id: "01JDS1K7RKZNS3HTP8AT9WHY35",
      textContent:
        "Resection of Lower Esophagus, Via Natural or Artificial Opening Endoscopic",
      senderName: "Averil Skoughman",
      senderEmail: "askoughmanb@stumbleupon.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-08-19T01:48:56Z",
      updatedAt: "2024-08-29T12:38:00Z",
    },
    {
      _id: "01JDS1K7RMM359STPR7M7Q67JT",
      textContent: "Drainage of Right Popliteal Artery, Percutaneous Approach",
      senderName: "Persis Beesey",
      senderEmail: "pbeeseyc@themeforest.net",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-01T08:38:29Z",
      updatedAt: "2024-08-03T13:55:40Z",
    },
    {
      _id: "01JDS1K7RNGKF2K30X2JFR2PBM",
      textContent:
        "Insertion of Defibrillator Generator into Abdomen Subcutaneous Tissue and Fascia, Percutaneous Approach",
      senderName: "Berri Wimpenny",
      senderEmail: "bwimpennyd@fotki.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-12T21:19:32Z",
      updatedAt: "2024-09-01T01:22:54Z",
    },
    {
      _id: "01JDS1K7RPWHRBSFZHR32YH1XR",
      textContent:
        "Dilation of Right Brachial Vein with Intraluminal Device, Percutaneous Approach",
      senderName: "Hynda Stroband",
      senderEmail: "hstrobande@networkadvertising.org",
      senderAvatar: "/images/user.png",
      createdAt: "2024-09-16T00:13:00Z",
      updatedAt: "2024-11-21T22:00:26Z",
    },
    {
      _id: "01JDS1K7RQ57WTZ103968CWR9D",
      textContent:
        "Supplement Right Foot Vein with Autologous Tissue Substitute, Percutaneous Approach",
      senderName: "Neall Elam",
      senderEmail: "nelamf@reddit.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-27T06:26:28Z",
      updatedAt: "2024-10-11T21:37:37Z",
    },
    {
      _id: "01JDS1K7RR9XHAFQRVZQZHGGRH",
      textContent:
        "Removal of Nonautologous Tissue Substitute from Right Acromioclavicular Joint, Percutaneous Approach",
      senderName: "Leshia Pieter",
      senderEmail: "lpieterg@tripod.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-09-22T06:27:01Z",
      updatedAt: "2024-07-28T03:01:57Z",
    },
    {
      _id: "01JDS1K7RSCCRC2W6AKFYPHFVM",
      textContent: "Beam Radiation of Ovary using Electrons, Intraoperative",
      senderName: "Alysia Dollar",
      senderEmail: "adollarh@ibm.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-22T03:49:57Z",
      updatedAt: "2024-10-08T10:12:57Z",
    },
    {
      _id: "01JDS1K7RTWX8PQZT0658QD1V5",
      textContent:
        "Insertion of Limb Lengthening External Fixation Device into Left Humeral Shaft, Percutaneous Approach",
      senderName: "Hardy Seccombe",
      senderEmail: "hseccombei@amazon.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-07T12:05:40Z",
      updatedAt: "2024-07-31T06:22:48Z",
    },
    {
      _id: "01JDS1K7RV9R0CN567QE5G5E1V",
      textContent:
        "Drainage of Left Greater Saphenous Vein with Drainage Device, Percutaneous Approach",
      senderName: "Washington Kingscote",
      senderEmail: "wkingscotej@apache.org",
      senderAvatar: "/images/user.png",
      createdAt: "2024-10-29T15:29:08Z",
      updatedAt: "2024-11-14T07:01:51Z",
    },
    {
      _id: "01JDS1K7RW8Q30CX6PEDQ8MGE2",
      textContent:
        "Occlusion of Small Intestine with Intraluminal Device, Via Natural or Artificial Opening",
      senderName: "Onida Frisel",
      senderEmail: "ofriselk@360.cn",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-02T20:28:20Z",
      updatedAt: "2024-11-14T00:28:58Z",
    },
    {
      _id: "01JDS1K7RXSJ8YT843F9Y1VCJ2",
      textContent:
        "Replacement of Right Knee Joint with Unicondylar Synthetic Substitute, Open Approach",
      senderName: "Lazarus Quinton",
      senderEmail: "lquintonl@so-net.ne.jp",
      senderAvatar: "/images/user.png",
      createdAt: "2024-09-21T23:19:31Z",
      updatedAt: "2024-09-15T01:27:10Z",
    },
    {
      _id: "01JDS1K7RYB2EZ2ZFFEV579N8Q",
      textContent:
        "Repair Left Hip Bursa and Ligament, Percutaneous Endoscopic Approach",
      senderName: "Zonnya Pahler",
      senderEmail: "zpahlerm@privacy.gov.au",
      senderAvatar: "/images/user.png",
      createdAt: "2024-07-28T21:59:26Z",
      updatedAt: "2024-09-06T08:20:56Z",
    },
    {
      _id: "01JDS1K7RY72EXHFYHYWXPGAH7",
      textContent:
        "High Dose Rate (HDR) Brachytherapy of Pelvic Region using Iridium 192 (Ir-192)",
      senderName: "Currie Footitt",
      senderEmail: "cfootittn@spotify.com",
      senderAvatar: "/images/user.png",
      createdAt: "2024-11-06T14:15:19Z",
      updatedAt: "2024-10-18T09:27:10Z",
    },
    {
      _id: "01JDS1K7RZ4KV9ZT78B49T33HE",
      textContent:
        "Change Intermittent Pressure Device on Left Inguinal Region",
      senderName: "Holly Sammes",
      senderEmail: "hsammeso@google.es",
      senderAvatar: "/images/user.png",
      createdAt: "2024-08-31T03:30:21Z",
      updatedAt: "2024-09-10T15:58:20Z",
    },
  ];

  return (
    <DataTable
      tableData={fakeTestimonials}
      dataColumnsDef={testimonialColumns}
      filterFns={{ dateRangeFilter }}
    />
  );
};

export default TestimonialsTable;
