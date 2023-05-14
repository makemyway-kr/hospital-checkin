import Header from "../components/Header";

export default function FrontPage(){
    return (
      <div>
        <Header />
        <div className="main_content">
          <div className="input-group">
              <span className="input-group-text">환자 성함</span>
              <input type="text" aria-label="name" className="form-control" id="name_input" />
        	</div>
      	</div>
			</div>
    )
}