import React from "react";
import Pressão from '../components/pressão'
import ConcentraçãoMolar from "../components/concentraçãoMolar";
import VolumetriaNeutralizacao from "@/components/volumetriaNeutralização";

const Index = () => {

  return (
    <div>
          <h1>Volumetria de Neutralização</h1>
          <VolumetriaNeutralizacao/>
          <h1>Pressão</h1>
          <Pressão/>
          <h1>Concentração Molar</h1>
          <ConcentraçãoMolar/>

    </div>
  );
};

export default Index;
