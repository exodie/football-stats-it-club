import { FC, useEffect, useMemo, useState } from "react";
// import { Button, Layout } from "antd";
// import { useTeamAPI } from "./api";
// import { Link } from "react-router-dom";
// import Sidebar from "./components/Sidebar.component";
// import Competitions from "./components/CardListView.component";

// const App: FC = () => {
//   // const [data, setData] = useState([
//   //   {
//   //     id: 0,
//   //     name: "",
//   //     shortName: "",
//   //     founded: 0,
//   //     img: "",
//   //   },
//   // ]);

//   // const handleGetTeams = () => {
//   //   useTeamAPI.getList().then((res) => {
//   //     res.data.teams.map((item: TeamItemProps) => {
//   //       const arr = [
//   //         {
//   //           id: item.id,
//   //           name: item.name,
//   //           shortName: item.shortName,
//   //           founded: item.founded,
//   //           img: item.crestUrl,
//   //         },
//   //       ];

//   //       return setData((cur) => [...cur, ...arr]);
//   //     });

//   //     console.log(res.data);
//   //   });
//   // };

//   return (
//     // <Layout className="app">
//     //   <Sidebar />
//     //   <Layout>
//     //     <Layout.Content>
//     //       <Button type="primary" onClick={handleGetTeams}>
//     //         render
//     //       </Button>
//     //     </Layout.Content>
//     //   </Layout>

//     //   {data.map((element: any, index) => (
//     //     <div className="teams" key={index}>
//     //       {element.id === 0 ? (
//     //         ""
//     //       ) : (
//     //         <Layout.Content key={element.id}>
//     //           <h2>{element.name === "" ? "" : `Name: ${element.name}`}</h2>
//     //           <h4>
//     //             {element.shortName === ""
//     //               ? ""
//     //               : `ShortName: ${element.shortName}`}
//     //           </h4>
//     //           <h5>
//     //             {element.founded === 0 ? "" : `Was founded: ${element.founded}`}
//     //           </h5>
//     //           {element.img === null ? (
//     //             ""
//     //           ) : (
//     //             <img
//     //               src={element.img === "" ? "" : element.img}
//     //               alt={`${element.img === "" ? "" : `${element.img}_logo`}`}
//     //               width={250}
//     //               height={250}
//     //             />
//     //           )}

//     //           <Link to={`/team/${element?.id}`}>
//     //             <Button type="primary">Click to profile</Button>
//     //           </Link>
//     //         </Layout.Content>
//     //       )}
//     //     </div>
//     //   ))}
//     // </Layout>
//   );
// };

// export default App;
