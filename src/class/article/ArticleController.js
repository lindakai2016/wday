import ExchangeControllerBase from '../ExchangeControllerBase'
import ArticleStore from "./ArticleStore";

export default class ArticleController extends ExchangeControllerBase {
  constructor(props) {
    super(props);
    this.store = new ArticleStore();

  }

  setView(view) {
    super.setView(view);
  }

  async getArticleList() {
    let result = await this.store.getArticleList();
    this.view.setState({
      articleList: result
    });
    console.log(result);
    return result;
  }

  async getArticleDetail() {
    let result = await this.store.getArticleDetail();
    this.view.setState({
      articleDetail: result
    });
    console.log(result);
    return result;
  }

}