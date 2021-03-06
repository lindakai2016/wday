import ExchangeStoreBase from '../ExchangeStoreBase'

export default class ProjectStore extends ExchangeStoreBase {
    constructor() {
        super("project", "general");
        this.state = {};
    }

    async getProjectList(params){
        return await this.Proxy.getProjectList(params);
    }

    async getProjectDetail(params){
        return await this.Proxy.getProjectDetail(params);
    }

}
