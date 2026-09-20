import Isolation from "./Isolation";
import IsolationAcoustique from "./IsolationAcoustique";
import ProjectNavigation from "../../../components/ProjectNavigation";

export default function IsolationPage() {
  return (
    <>
      <Isolation />

      <IsolationAcoustique />
      <ProjectNavigation current="Isolation" />
    </>
  );
}
