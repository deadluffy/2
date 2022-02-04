import React from "react";
import { Link } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Typography, Button } from "@mui/material";
import category from "../../store/category";

const News = observer(() => {
    const [news, setNews] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        fetch("https://demo-api.vsdev.space/api/articles")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setNews(data);
                    setLoading(false);
                }, 1000);
            });
    }, []);

    SetTitle("News");

    return (
        <div className="news">
            <Typography variant="h3">
                Актуальные<br/> новости
            </Typography>
            {loading ? (
                <Loader />
            ) : (
                <div >
                    {news.map((item) => (
                        <div key={item.id} style={{ marginTop: "30px", display: 'flex' ,background: '#000', borderRadius: '30px',
                         width: '1150px', height: '150px' , justifyContent: 'space-between'}}>
                            <Typography style={{margin: 'auto 20px'}} color="#FFFFFF" variant="h4" gutterBottom>
                                {item.name}
                            </Typography>
                            <Button
                            color="secondary"
                                variant="contained"
                                LinkComponent={Link}
                                to={`/news/${item.id}`}
                                style={{ margin: "auto 20px", height: '60px' }}
                            >
                                Подробнее
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default News;
