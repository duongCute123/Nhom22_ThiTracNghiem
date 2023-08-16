import anh from "../../images/trac-nghiem-online.png"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <img src={anh} alt="" />
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-2">
                            <li>
                                <Link>Thi THPTQG</Link>
                            </li>
                            <li>
                                <Link>Thi THPTQG</Link>
                            </li>
                            <li>
                                <Link>Thi THPTQG</Link>
                            </li>
                        </div>
                        <div className="col-sm-2">
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                            <Link>Thi THPTQG</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer