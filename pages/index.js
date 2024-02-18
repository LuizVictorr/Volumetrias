import React from "react";
import Pressão from '../components/pressão'
import ConcentraçãoMolar from "../components/concentraçãoMolar";
import VolumetriaNeutralizacao from "@/components/volumetriaNeutralização";
import Baskara from "@/components/baskara";
import CrescimentoPopulacional from "@/components/CrescimentoPopulacional";

const Index = () => {

  return (
    <div>
          <h1>Crescimento Populacional</h1>
          <CrescimentoPopulacional/>
          <br/>
          <h1>Volumetria de Neutralização</h1>
          <VolumetriaNeutralizacao/>
          <br/>
          <h1>Pressão</h1>
          <Pressão/>
          <br/>
          <h1>Concentração Molar</h1>
          <ConcentraçãoMolar/>
          <br/>
          <h1>Equação so Segundo Grau</h1>
          <Baskara/>
          <br/>
    </div>
  );
};

export default Index;
