import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

function BusinessTogglePage() {
  return (
    <Container sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Box display="flex">
            <Box>
              <p style={{ fontWeight: 600, marginBottom: "0px" }}>Paperplane</p>
              <p style={{ marginTop: "0px" }}>Right for 👇</p>
            </Box>
            <span
              style={{
                padding: "0.5rem",
                background:
                  "linear-gradient(116.34deg, rgb(25, 188, 204) 24.17%, rgb(31, 212, 163) 123.73%)",
                color: "#fff",
                borderRadius: "11px",
                height: "20px",
              }}
            >
              Enterprise
            </span>
          </Box>
          <Button
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(128.8deg, #4D63DD 28.61%, #22A1F5 99.07%)",
              color: "#fff",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "20px",
              padding: "10px 25px",
            }}
          >
            Book a demo
          </Button>
        </Box>
      </Box>
      <Card
        sx={{
          maxWidth: 150,
          minWidth: 120,
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: "120px",
              background: "rgba(161, 176, 255, 0.5)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="data:image/png;base64,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"
              alt="img"
              height="80px"
              width="80px"
            />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Montserrat",
                fontSize: "19px",
                lineHeight: "20px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Hospital
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          maxWidth: 150,
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: "120px",
              background: "rgba(161, 176, 255, 0.5)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.paperplanetech.co/static/media/polyclinic-2%201.f8bf1286007005a050a3.png"
              alt="img"
              height="80px"
              width="80px"
            />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Montserrat",
                fontSize: "19px",
                lineHeight: "20px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              PolyClinic
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{
          maxWidth: 150,
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{
              height: "120px",
              background: "rgba(161, 176, 255, 0.5)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAAEOCAMAAABowYh/AAACNFBMVEUAAAB4if9MWKh6iP+2v/1QWKd3h/+Pn/9MWKeTn/93h/+1vfxNWKh5if94h/95iv9Za/94iP94h/99jf97i/93h/91iv95iv94iP94iP+2v/22v/20v/+vv/95if+3vv2zv/t6hv9JUJ+SoP9MWaiTof9NWahhdP95if+2vv1kd/+lr/eToP9pfP9KVqmnr/dZbf9ecf+Uof9MWahYbP+2v/1YbP+Vov9qdshYbf+0vv12hv+Uof+2v/6Vof9NW6z///9MWKiTn/////+lr/13gM////9uf/+TnuDv8f+Nm+O1v/xMWalIWKd5if+2v/1Zbf////9MWaiUof+msfl1hf9tf/+8xP+rtf+Qnf+yu/2Ypf/N0//t7/6bpu9tfv9Xa/Ruesaapv+Qm+SlsP6JmP/u8P/k5/6grP+rtv+BjNL39//k5/+/x/2stv+uuP6nsf6Ckf/ByP/e4f/V2v+jrv+Bj/+0vf2Cj+m0vf9uf//AyP+Xo/+ps/6Dkv+wuv3R1/+fqv6rtf1SX62Sn/+Lmf7Iz/27w/1YZbP4+f/K0P+cqP+Wo//Ey//m6f/7+//y8//M0v/b3/5od95icdNfbL6Ilv+psvJ6hs6cqf+vufiLmPSirO17iODg4//X3P9jdv+QnfpufelwfMtmcr3q7f/m6P9fcv+bpeiMmN5tecJea7lqfP9ecv/Ey/2uuPuHktl/i9WhrPRndMh8jP+rtfqUoOl0gdlwfdN8jP5zg/Skr/IiJydUAAAATnRSTlMA30CfvyCAIIBAIICf32DPIL+gEE9AMO+QsO/fIBBwcEAwEO/v39+wr5CAgGBPMCDfz7+/oJ+Af3BgT+/Pr5eQgGhQQDAg79+/j4BgUCDmaWexAAAOCklEQVR42uzb2WsTQRzA8aFYPB8E3zxQvEAUBUUU8b7w/jn7C4hZUzUWGhvD5sEafYhJGkyiDV6oqa0HtQqtBbWKB/rPmW5q3d2ZTnfSnTbZ7uexZPvwZTL72+2U+M/h/RsQ123fMp8E2DgbcNyGXSTgsAst9gYLiKlj67OMNKK1W1u8sZVI2YIO+0njad2heWbjAiJhAzotJI1m63rNS0tkFg9jO2k0GzVvuV8/25GxrtF2nzOaxzYSt9Yh6yhpLAs0r60l7ixDji2ksXifp5W4Mx8RG35vDvIEeYI8NUEeoSCPUJBHKMgjFOQRCvIIBXmEgjwza/dVrx3zU57NIa9tC/IEeYI8QZ4pnbrmNV9tzcGNPcgT5KkJ8ggFeYSCPEJBHjVW7jm9ejHHiU63ej++z/szz5qdy8ETr76M+C3PqsWiNvKFBn2VZ/Vy8Fil5Js8q+aBAp0+ybNyBShxrSSbhz3GuPs2x+6WCWuJU7PUAQi3fXkul0f+GOMO+29qojoA4VCo7apkntb1mpT1LUSlFaDQ59AkgVq9O8a4XuUXbBMo9T1UNSqRp0WTdogosxLUSoXGtJVc5zmkSTtAlJkHin3m92n18PFuCVFlDaiWCpna8s2YZyco9zlkGm7CPKtAvXCoZrD58uyBGRCq+ZpvujybYAZ8D9WMNl2eeTADPk8sn2bLswIkFTqyRZCUCY3rbbY8IClLKY3I783j2nySJ1EoFIrAEaFVn4CjMjQ01CfIY7LMhi1LJyyyOdDgeRJvHtExkewkeS7EUmA31FvbVt4Pi/NYnk2vnP/n8jmbZ42d5ymdEE/w82AXWPVZ9pRSRZRntNnzFCPUKsvPo4NFZUSzyL8S5Blu9jwPqV1h6jwjmk2+MnmeH02eJ0sd4vw8ohfuI+FJ87Q1eZ44dXqSEeepaIzXGZ/myVLGfT0lzPNFYzwvh/2Z5yFlpWPCPO811kCPP/M8pqwLGBbl0Theo+HLPJTjAbYL8vTx83TNoTw98nmi9ef5/a7m2h8j2ZWLokhLzVmiCHPjYt3BsiAP5DXWbUTZPKwk1GSqlV5OUokoBnYdlJVGlN6avczDVJq9PJco4zGKV08n58aOCvIwlWYhTzHOuXFhVJSnL8/ZejCqIA9baabzwCXO4sEuUR74wls8MRV5WEQxcHrjmJljiJgR5oGPmk2pHxENn+ax97mfRsQciPP0fWTq6ODXPJD9PzrfiCFiOSzKYxq1fLP6sSrs3zyp5IUP5sp5a+CYbhDmMQ0MlrSq/LfbOCYN/s0DqRxGY8kYmsrd4CJPKoYD/f3945ekwc95ANI6jsuFQZyHvaQnDD7PA9BdnSqiuWQKQJDHzpi4xP95GEweATV5ChHKOH6QWM3hPIlHlOcIsZjDeS5RLtvymUN5XoDdJxqsHguD/estK36SWM2dPDowigkGzCNWcybPLXBpNVEJePqGq//x+LHzlUSeYvbNw0jHzYRXebrBpeUriUK8OJ15raY07DJPseMRrYl88iTPRXBtH1EIGK9K2n+9rvIUrCPJUw/y3DLAvTVEHbZOXrMadJEnS22eTj9PDiSsWEWUmfIfQHv5eUTj7M3p5rkHUjYRZcBhUHP6MVWeOHW4H55mHgPkHCWqgF1FYzxvF+cpUEa2fVp5dJCjcPgBu16NNWAI83RQxn3sls3DH3lmffgBu/ca67UuzBOnrLSeqj+PJe2sDz9gl9dYP9EQ5aEcF/C6fB525Jn94QfsNI5fGBPkSfDz5GTysCNPuN21jMTwo2b16II8RcpxB/V689S69qBrekrh8AN2I9zDOmXZvceQO4LA7MtJlNAFYxYTPvV3LkTpO1fdeXLm53WUkTF3ZyXLB+yGuKdRdMm55y1iWSaPc/HEUEoPjNlDFIAp7+z9KDo8Z/7IKWa5RC7PRfPjKMlQNhuCQ8W5OQ8iYlqY59Mj5jAiYrK+PEnZxWPqEXy71D6xlxBRD0s9sWexKlxfHvMyHSWVU9x7u/r3Pd8GELEdxHngUtxZpx3qynPX/DRKM1Q9WQDr67eJpXMbq6Iu3ha+peNuGFilQ315XkDVdZSWVPVeAzj+snN/r2lDUQDHA0IfCmMPY2xPvuxv2L+Ry+WyZUmQQchoShIiVAkytFaYEn9MYTgYY+3D6P+wP2/XC3apOR4SW8m4Pd/3Q+mHUqP3eP2fv36v1+s/Ckd4Ds6j6gfWTRTdLBKhdJwDeWz8oQd/9HlrPH4MauTmfnJa6qP4JDdylbKH8PiicsGxXroYmNN2xab5LEE+TIU3WDYjmvPILkf9/mWKnFTAI4kceQo8Bx8DEg/xEA/xEA/xEM//xTM+CzlftjoxwgOPDGPteXILsteTcjzj8N8CguY891b4whjhgUdWsc488leFfGAeeGSiL0/Md7p1QB7sYomOoy1PyHfrOSAPPqIpz5gXitwU5RmCI3rynPFigY/ytHihzOvqyQNeMTJPMZ4leIicaskD36HRrrqCYAn/CfHMqi+wzA7i6bZkXyO0VWTVxhPyYgv8jJ0D9Q48Y//AS3Xh1cTTgrdRKi/PCXFMHj6siacDbaPgPNfQrSRH5uFePTyTJbSN4lVcYLHkyHF5rBp4wO+UZYGAdguxZ6WVJ8SVnjyTVeEfs4A2U7FLbXpyZKQnD4vDwq4OtNeMjCzUiKY8LL7gd2ULIXNgHtgnS4Qs0ZaHpZ8jrsqmnpD5DOdRI7c7I/ryMMcNetOpleR2ZzAeNeKpkbZQ+UxnnvzbnlnCQB58RHMe5vR/uGLudRPGYB50RHueh5xzEQ/xEA/xEA/xEM/j87x83SiRXbHuucweDKpNfdk2+HbXx/fb3pnbPp2XzB7c67ste9MoUfNU4Zw+Nymwk43OM5PaU9MwGia1r1cvDPrjQWoaJrW/E+IhHuJREQ8a8aARDxrx/GWvjlnbBsIwjj9ZNBhsNyZR8dLVYDA0UAolH6Db6d7BskMzBcsNCEqLY4fYKcHGXgoJePHYegleki1Lv12VLEaOdVR3r4xA+o0C3fCHl0cpz6OU51HK8+yWhbciF+kd9kUu0iEORS5KBUBJ5LYrFxAoVMp7rxw3s+R477V9C9HeyCypIS6ZJXXE9V5mSANxfZAZYiOujzI7Vojtk8yOI2yXT9eLGpBPV7Q6kE9XtAaQT1c0G0j3dD0+PM2m485kMumMx9NF80Hu0ApI8XQ9DmcdZ9PN+MfOEh0BqZ2u4fTGiTBZLOUu1IB0Ttfj4sZRGjdl8upAGqdrHUdh8lcmrQGkb7qWs3UcpU7SJ2YDqZuu5qXz32YrmaAVkLbpWl47cUyGMjlHQMqm6+GnE9NCJqYGpGu6xKUT25fEDqwOPZ9dpZNR4NwNGz1rukrf775q+PPkKp2PAiduyGIUcFy1BvRUhFKbAqcijJ55QqVFerrqZ08p0BYhZy//CTUbeiz9POo6Jn3480BTiTWPuo4Mu1D0Yc5ThqZCAnn6ZJCH7gb8earQxZ/H843y0Jw/jwVdRe48gy6Z5aEr9jwH0FXhznNLpnl8jzuPDV0Wc542GeehO+480FbizTPoMuShFm+eMrQVePO0iCOP77HmqUIfax6PWPLQnDWPBX1Fzjxzpjw05cxzAH0VxjweceWZc+axoc9izDNny0MDxjwwUOLL4/l8eVp8ecowUODL0ya+PD5fnipM8OXpMeahM7Y8FkwUufJ4xJnnlC3PAUxUuPK0WfP4bHlsIKHp6vcCV5s39GzLslzEy/OLYl9XqxfY+D7tBeZCAUZKgolPSvcyzCG1K8GjDCMFwWNKan0ZNrwnpQvBowozgkef1n5/23Tuyk3L2fUmh9a6gocFM0XB4pbW/nV3BytuQmEYhr9uXARMMJrEbAaym6v5aTbVhauAQhEKM0kE2y5dFTIwN5Hr7EwLU8a2Zhxfg8l7AVk8nJxfD4r3H9/XXe3CmShQt6aGtKN5KkOaq1uOIR1pntiQpEGMrozmKY1oIg1idK1pnsiIltIgRtdAeRxpEKML50mMKJD40dX+novnOdhzXe+55uqaM0yeCOFR58ZXzDNR50YIDz/YCZ6luofwHGmePcHjADwuwZPQPBXBEwA8U4KHvyUleOYAj0PwxOs//bj7q38caNiXet9ePadB8AhoTPCk6+a+13Q+nToOI3gmAhoBPCcPU/O2h6kEz1JECE+ybq721s39urmK4HFE5BI85bq5r614MiN4AhFNCZ4C5UkQnrmIHILHtiTPBuER0hjhKUGezAieiZBWCE+RczwlwrMUko/wWMTxpAiPIyYX4SlyiicxhCcQ0y3CYxHFkzI8czGFDE+RMzyJMTyCGjM8FiE8WcrwTAS1gniKjOCJjeHxBOVDPLYBeLYG8YSiciEeO3TmyVKKJxDVLcVjx648sVE8M1GFGE+adeOJDOPxRTXGeKzKu/DsDOOZCGvF8Vjcgeeh4Hg8YfkAT7PP+V/zD8XltufhfR5SA3kCqd/RVUVP7e110XOFNbbP36OzPfWr0VNVbRJET5X44KoXGlqatdc5GFd9cA3kCcOX0m1LnLw0tonAVkYXtd124DyRLYwuPb596USG54jMM774jTvQLjW8+s48jKe/a70FaLuxPhKab/0UN//F8kM/ODaVBv/v+lWVZP9dOGVhPTUT28z6qyp3eZ3meNgX1luudCnL53fppowet889Pkafq8J6bSa60RV952wqvhu7ltyR8K7ny+2LF52L2n7O1Vj95F/D+lnUdIZ/8XzO3JV6LHDtogt99ZtzwUDeTL3njy9zi16EM52nURDeeh9OtrBztPhwOm968z6bn+hdZCKNMXl2AAAAAElFTkSuQmCC"
              alt="img"
              height="80px"
              width="80px"
            />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: "Montserrat",
                fontSize: "19px",
                lineHeight: "20px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Pharmacy
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default BusinessTogglePage;
