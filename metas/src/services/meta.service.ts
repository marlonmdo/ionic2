import { Meta } from "../data/metas.interface";

export class MetasService {
    
    private metasSelecionadas: Meta[] = [];

    selecionaMeta(meta: Meta) {
        this.metasSelecionadas.push(meta);
    }

    removeSelecaoMeta(metaParam: Meta) {
        const index = this.metasSelecionadas.findIndex((meta: Meta) => {
            return meta.id == metaParam.id;
        });
        this.metasSelecionadas.splice(index, 1);
    }

    getMetasSelecionadas() {
        return this.metasSelecionadas.slice();
    }
}