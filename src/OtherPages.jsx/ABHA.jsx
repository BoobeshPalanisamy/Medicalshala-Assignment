import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Container, Card, Grid } from "@mui/material";
import CreateAbhaIdPage from "../Home/CreateAbhaIdPage";
import TailBar from "../Home/TailBar";

function ABHA() {
  return (
    <div>
      <CreateAbhaIdPage />
      <Container>
        <h1 style={{ textAlign: "center" }}>Frequently asked questions</h1>
        <Box sx={{ margin: "0 100px" }}>
          <Accordion
            sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
            square="true"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ padding: "15px 20px" }}>
                What is ABHA number?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "rgba(0,0,0,0.54)", padding: "0 20px" }}>
                ABHA number is a 14 digit number that will uniquely identify you
                as a participant in India’s digital healthcare ecosystem. ABHA
                number will establish a strong and trustable identity for you
                that will be accepted by healthcare providers and payers across
                the country.our Ayushman Bharat Health Account (ABHA) is a
                hassle-free method of accessing and sharing your health records
                digitally. It enables your interaction with participating
                healthcare providers and allows you to receive your digital lab
                reports,prescriptions, and diagnoses seamlessly from verified
                healthcare professionals and health service providers.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ marginBottom: "20px", borderRadius: "10px", border: "none" }}
            square="true"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ padding: "15px 20px" }}>
                Why you should create ABHA?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "rgba(0,0,0,0.54)" }}>
                Using ABHA (earlier known as Health ID) is the first step
                towards creating safer and more efficient digital health records
                for you and your family. You can opt-in to create a digitally
                secure ABHA, which allows you to access and share your health
                data with your consent, with participating healthcare providers
                and payers.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
      <Card
        sx={{
          background: "rgb(243, 243, 243)",
          margin: "20px 100px",
          borderRadius: "30px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Benefits of ABHA number</h1>
        <Grid container spacing={2}>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/ID.b8d07d3615493679c060.png"
              alt="profile"
              height="70px"
              width="70px"
            />
            <h2>Unique & Trustable Identity</h2>
            <p>
              Establish unique identity across different healthcare providers
              within the healthcare ecosystem
            </p>
          </Grid>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAYAAAAM4nQlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5ggDCDEFligUlQAAITxJREFUeNrt3Xmcz+X+//HX9Z4ZxlpyEpLMYkmkGEIidGyzWJqxdGzNjBFFJ8LBME1ZkqSDVGPGEilGmk2WDiJLlkPZsswmwpClbGOWz/X7Qzq/43zt85lrZt6P+z9uzGfe1/N9zdx8np/rvSkB7oGv70uHD/bw9FSRKtnl+MCB6oBaqza1bSsOqad7eHjIYlkhY0uVMp0Tt9BIT1Yjc3IkzGouz0+dmvhQ9B7PsOHDTccC4DzKdAAUPlor5a9CjqUljhollWW39Bk7VurLYr29WDHT2XCP/CVUUrS2SuaeEc969eJ7zvX18t6923QsAHmPAoA74l8j5LfUpdOmSU0ZousNGmQ6D5zkvMwU38WLE7+NKe61v1s303EA5D3LdAAUDn6RoaWSv+rWjTd+e9AL5Ul5LTCwY7OXxh96tXZt03kA5D0KAG4qQkdorS1LPaynWysmTDCdB/lD9Zem0sayHGmqrstn4eGm8wDIexQA3NQPQ4+NT4lr3FjiZaMe7ulpOg/yWSV1SId07RqwIXhYWt2aNU3HAZB3KAC4KX3Z8bla3rCh6RwwpJLskwEuLrq6tVwPGjXKdBwAeYcCgJvStfVqiXvwQdM5YFiUY73868UXAxqHTEn+u7e36TgA7h0FADdXRxJls4uL6RgwbKsapie6uuopup16h5UAoCigAAC4fa+pFRLeu7ffw31TUsKqVzcdB8DdowAAuH1/nBMgPV3SJW7YMNNxANw9CgCAOxckM1XVvn39p4fuT7/s4WE6DoA7RwEAcMdUpNyvF7m5yQB5wvEozwwACiMKAIC7pn/Q/lI1JKRDl5CKqZcefdR0HgC3jwIA4K5dWwmw/OVx7fPGG6bzALh9FAAA90xtl72yoV8/3wO9fzj4wMMPm84D4NYoAADu3c/iK2eLF1cfu612rcHVAUBhQAEAkGdUB/ldT+/fP2BD8LCfh1WubDoPgBujAADIO9PkqDzg7u5wl3bZ24YMMR0HwI0p0wFQsP15THdIsRnW1ooVTefJay4jHeUkrmxZx6tWFet0+fJqpx6sJ9SpI70kVTVv1EguSZhu06KFZEs1ebFkSdN5Cw03SZeFly65eroNl+keHl+993Fbr5MnT5qOBeA/KADATQRsCB62P7pMGXlJtXD9W5cuuq3UtzoNHiyHZYyeWb++6XwFXrTaolZPnpz4UPQezzDuFwAUJBQA4A5prZRfZGiplLiuXVVHXd8a9d57MkZq6KQqVUxnK2h0lMxXr1y4oCxVQ7p4e18tAhkZpnMB4BwA4I4ppXVSRPRF786LFmX5SSe30Hr19GeyTiotXWo6W0GjwqSX/rB0aUl2LNK9J040nQfAf7ACAOQRrZXyHx9SM3XtlCnyvTSTR19/3XSmgkJ/IptklcOhF6ipau9zzy0bHt3Oc8Z335nOBdgZKwBAHlFK68TRMQe8Wg0ZoiP0ixIyZYrpTAWF6i9NpY1lqVa6m35g0aLOp8LCDrepVMl0LsDOKACAEzRo8Egrz7XDh+v5clZNXbHCdJ6CQkVKoPSpVClb5TbJWZKQ4Os7YMDhw+XKmc4F2BEFAHCCSBWplHI4XI9nO67U7NlTSsoa1fPXX03nKijUS7JBTvn4WM2z2uZ8vnZth8V9dJouepeZAgUZBQBworjHPo17bNDp07JM2uus8HDTeQqcDZIoQfXqWc1dfnac+/FHv4dDu6SEdehgOhZgBxQAIB+4t//9lOf26GjJlnmqy969pvMUNKqfekvOVKigIvQwCUxK8rsQ/FvK6/Pn+08P3Z9+2cPDdD6gKOIqACAfBUwOPpFSoXt3vV6Nls2ff246T4G3Q7oqn6wsqS7P6Yfi4qSx9RdVc/589+RzbS+7rVoVuyR2yeNLsrJMxwQKIwoAkI8idITW2rJ29DuyJ/Ufe/dKhvpAwmrVMp2r0Kkqy6TclSuyQS5K0M6dup3Eye7du1UV/bjIyZOSKqVlzPnzpmMCzqQy1dOyOzNTZ+v7rYPHj0s9K0Yt37YtcVB0rWol0tJu+f2mdwCwI98LwcNSn/3b36we6oyeu2CB6TwAig7dW/dR3Tdtsr5XXWXdyJEJU2JOeJZcv/7613EOAGBAyZfOp3us/+ILmSrL5NTBg6bzACg61Kdqnv6iaVPHUCmn561dG1ApZFtKu/99FgcrAIBBAdVDkpIv9+mja8lX6tjcuabzACi6dIQMVQf79Uvyiant2T46mgJwhzrqPjpN33+/7u36vC7ZpYt+T2XIP1u0kBl6mN5esaKuIwHSx2JlpYBTIv6y7PJl7eUopZe++WaSz5yV3vt37MjvHEFBQUFau7hkPl52dOrvP/0k/5bp8mv16qbnB0DRc+3hXG6uLn1dHDVqUABuk3+7ENfUegMHymP6nA4dN06S1WvSgTuYFXopslv27dqVuC9mq6ffk0+KXL2lb37HCOgV0jq1RHCwPifV9J6YGNPTAqDo0hH6AfXF22/zSfUW/OaEtE6pPX26uEkfvfTDD3njL2K8pK7UfuIJ3wMvXUlt1qmTqRgV3V08z6yfP19HS7jEp6ebnhYARZeaq16X9b6+FIAbuPaJXy2VapL46qum88C5rAbW66rRmDEiV5/ql9/jR82KmuXTMDtbeclk+eydd0zPB4CiS/cVPz3Ty4sCcJ1rx/j/XOqHPbSUK/rVp57yGxGyOu1bPz9TMdzb/X4y02POHCmnPxH5+WfT0wKg6FGR8pTIffdRAK6T+2/Xn/SKwECW+u1JXZTH5J033xQxsxLw553tTip31WXSJNPzAaDoogBcR30qy/W45s1N54Ahh2WMnlm/vt/DoV1S+7dvbypGTnLJhNxnY2LkbTmo/I4eNT0tAIoeCsD16slBWVm5sukYMEv9RX8jKVfPCTBhefL0DtVnXLmic9RefXryZNPzAaDooQBc7yfpLRnFi5uOAcOqSleJatzYb3vw6rQH27QxFeN8g+zTVkZUlOyVyjLq2DHT0wKg6KAAADehNqsftN/VcwJMWKfmKQ+Vmamf1p1V5pQppucDQNFBAQBuZpXs0+FNmvhPD92fUqFVK1Mxzi/MfUrFzZypI2SJzDt+3PS0ACj8KADA7QjXr6jzb71lavhrKwHyvQ7TY6dONT0dAAo/CgBwO5pLNb3nmWf8fV4anzamRQtTMa48mz2v9OqZM/UsPVYeOHnS9LQAKLwoAMCdGGD97Bhh7uqAb+rNP1mx7cWLVh/1vmr0wQempwNA4UUBAO5EnORIRuvWvu+Grkh99dlnTcUoXqb4M5frTZ8ufaS2anzqlOlpAVD4uJoOABRG1nmdobPCw6/+rW3b/B4/dsnMro8vuXDBNyT0QtrkXr2scF1Gnhw8WKfLGb2iWDHT8wMUJMpbGqju5cpJhvjqj//yFzkqL4pb1aqSKNHilf93/CwobLvjN+L/RsjGlJTvvpMDMlukWTPTeVCwqe3ysrzSrFnC8ZiGXis2bjSdB8Ct+W0PCzvWr2RJtdkx5HJ848bSVQLVuHbt5LguJ1N79JAxUkMnValiOqezcQgAuAc6ThqpjaNGmc4B4PYl+URFVZ516VLioOhaXifXrEl8KHqPZ9jw4e7jf6/osa9aNe2jvtC7unfXs6W3Gr1vn+m8zkIBAO7FOAnWP3To4N+u3+DUeg0bmo4D4O7FxsbGKpWbmxQRfdG786JFlUe5LDgz9MkndYRKFxk5UnZIV+WTlWU6Z17hEMB1AjYED0urGxCgS1hnc7+qWNF0nryiovVm9W6JEnqm7JFPypWTzvK5zH/wQekr8XLFx0e+kXXyQr168rP4ylluhXzHesoBiUlMTOwWs8FrQkCA6TgA8l7Hai+tSRv49NOOoZZ2NI2Lk1WyUJoU3vcJCgBERKSF7qPTtLt7mafcpulRfn4yQjfVO3v1khbSWzr6+an+0lTaWKwY3Yi/hEqK1rq+40092McnyWfOSu/9O3aYjgUg7/n6vnT4YA9PT6u8ethl3Nq1clb1F6la1XSuO0UBwE11XNB3WUpy3bqOmdYV+WHCBCmvlslTfn6mcxVYW/R49WV8fOLJ2RU9h3fqZDoOAOfx2x4WlqZr1VKf5bzvmLFpkySr16RDuXKmc90uCgDuSIB/SHBqSlCQ9tbT9NeffFLYfuHzTbTaola3aXP15KJvvjEdB4Dz/HnoeJ/q4pgSF1dYLi9kSRd3JCExZranV2ysekEiragmTWSl+KoaR46YzlXgtNQldaX33gsKDArcG8h1+UBRltBs9mSP3QkJskc2SeSCBabz3C4KAO7K1V/4AwesKzmdVU7z5jpawiU+Pd10rgLDS+pK7SeeyHyrTGv3B95/33QcAM6X2yxniLVh+HBJkrdl6+XLpvPcCgUA9yRezVMeKj3dsc4aZr3eubO4SbosvHTJdK4CY4TaLiNeecW/dMjAlAb9+5uOA8B5vu46T3moEyf0bOklb8fEmM5zKxQA5Imvu85a4qF++EGVElETBg0ynafAeV96ycSPPvJ/M3hB8gbmByjK1Ebrd13l449N57hlTtMBUPRorZT/weDLqXHr1slQ9ao8Ye6hOQWWh9SW3vPnZ4ZkTSo1dsCAa0/5Mx0LQN7xLxEyJWXu/v3yvOyTZ2vWNJ3neqwAIM8ppbU6KWPlwJAh166PN52pwEmTffJpr17FKxeLvTRn61bf5aEX0ibn/0OFADiP/k6/Js+uWWM6x42wAgCn8vs8ZFtKu/h4tVA+lg+5Q94tuUu0jFi3TjXSGbL+44+Lbz0/qNiI+PjY2NjYR4YW/JOKAPzHn+f+tJQrsrjgHRKgAMCpAjYED0t5x8dHT1JnJGjbNtN5Cp1nZbjy/v13aSG1pPSGDXqn3qC/3LpVMqw2+uL+/epl8bBOnTnjCJbGjlZnzpiOCxQkrj1yOivJyorvOdfX02vPHpGrK5T5Nb5/Rmid1Ki//lVC9dO69apVpufjehQA5Av/LSEqtcyyZdcenmM6DwAbaSwb5PDUqYmjYw54tRoyJL+G/fMhYW6Oi3rp1q2mp+F6nAOAfGF1c6xWvd56y3QOADZ0VmbLo/n/tE6rZ3Zb/WVmpundv2E+0wFgD/Hpc1p5zNyyRaJ1qPRYudJ0HgCwO9dbvSBCR2itLWvH8l+mpUujRrLVUT53Y8OGUl6eV10eekg+UYdUcddbbgdmqdKyVRKOHi3+yO/fezz50UfXnnud3zn036W4PhQZqURECWe9A4ApN3zj9g8Nfibtua5dd8QcnZP28sSJEi+79HBPTxElqpKIiKyVzSLiIcI1XgXftZ9RZpUyc1JnlColIrEikybld46kz2fX9z67ebN/TEj/lIdWr5Y4yZGM1q1Nzw8A2M1/HQLQWim/10OmpDb+4APJULUcMYsWSbxsvPrGjyLhmKqrFr7xRlDgwMV7A0uXNhVDhUuoBEZEmJ4OALCrPwuA//zgOWmDRo5UybJPf/baa6aDwUkuSSu94C9/ufxc5rbiXwwYYCpGwvGYhl4rNm68dt276WkBALux/KeH7k+/7OEh36uR+q2xY00HQv5Q36kl1rPDh5teCZDm6oCs5+oAAMhvlm7i+CW3/SuvyM/iK2eLFzcdCPnk2kqAW6Z3ieywMFMxEgdF1/I6uWaNTNEzZNd335meFgCwC0sdUGvVJs7GtivVVJ3VQcOGBQUFBR2ZUqKEqRz6d9lkhY0bZ3o+AMAuLN1K3pVW1aqZDgJDVslCaVKx4uUR963OmtSvn6kYST6zW3ucWrVK1ku6qrNxo+lpAYCizlJh0kt/aPAYMAoInSsv/+MfplcC5CF92nF0/HjTswEARR13AoSIiKhICZQ+lSpdbnpfzezzwcGmciQenP2Dd/nlyyVELsiagnfvbAAoKigA+C9qhK4vb48Y0d570NeHXjV3UqjeLGHKm3MCAMBZKAD4b21lmT74yCOuJy4lWZv79jUVI2lSTGvPlomJeo40kwe3bzc9LQBQ1FAA8H/roqfJ4lGjggKDAvcGFitmLEe6TNcHOCcAAPIaBQD/t7Oqv0jVqpktypwpUaZXL1Mxknxidnj5xMdLM/GX2B9/ND0tAFBUUABwcyVUTyk2alQLHaHXajNPfVRKa/25Oqx+45wAAMgrFADc3B8Pgyrb9Uhs1aCePU3FaLDz4cEeE5YulfMyU3wXL5bjUls+yv/HGQNAUWHkEx0KHz1Cmqtfw8NbLI7Qa/WCBetUpGqpcnLya/xIFamUcjiu/q1bNxER2f/HF98zPTtAwXLtfh5XjpRtfOXIww/Le/qEy+ratR3u0s5Rvnlz9az6Qfr6+cnzsk+erVnTdF6YQQHAbVGRarSO8fIqG/3Llkdnde9+9V8XLDCdC8D/io2NjX1k6OXLIhIrkpwszUREkpNFZLJIQoKIiHz7xht+pYN3JJdr0kTNtZ61Hho2TObpf+lpnTpJokSLl1Km9wPOxSEA3JmP9ALdbezYoKCgIK1dXEzHAXD3kj6fXd/77ObNicWjL3ru79LF2m+t1hebNdMRMk1k927T+eBcFADcmX/LdPm1evXMwPu6pY7u2tV0HAB5J/79WeHenTdtOt8gp6Tl2aiRri0vSpNZs0zngnNQAHB3KuoY2TNmTISO0Fpb/B4BRcg6NU95qMzMpEkxrb1OhoVJkryt9oaHm86FvMV/3Lg770llmfrYYzsDjoakpb7wguk4AJwnUcdU9gwYP17HqUQJnzDBdB7kDQoA7okjQk+QkIkTTT87AIDzJblEn/RcGB4uW/R49WV8vOk8uDcUANyTa1cHuPz94lr1weDBpvMAcC6ltNZfu47JLhsaKsvlZRV5+rTpTLg7FADkCVVTlVQ733orYEPwsJR3fHxM5wHgPEk+UbNqvvzrr0qkto4YM8Z0HtwdCgDyxjQ5Kg+4uzuqq4FSLDa28xsvr0ypUKGC6VgAnKd4p9/7ZI6IiZGV4qtqHDliOg/uDAUAeUqFyjjpWK1azrmsyvLSunXtvUP/eejVKlVM5wKQ92KXxC55fElWlp6mH9LLY2JM58GdoQDAOTLUBxJWq5ZrVR1lZa1f79+u3+DUeg0bmo4FwAnedlSUJQsXmo6BO0MBgHOVksYywsNDj3P8Im4bN/qrkGOpCaNHX7tXuel4AO5d0i9zvbyiDh3S0RIu8enppvPg9lAAkC9UpNyvF7m5iZ+M0Y+PG5c5uuyJ7OiDBwNcQy6mpAwYEBQY1i8l+b77TOcEcPfUWX1WrO3bTefA7eFhQDBjjNTQSVWq6PYyWGTmzMz+uVXk7Pvv+48L3pHyQVKSfCH7tM/69dZcXdll4datji0ug/WT6emVwq0mZ546cyZqVtQsn4bZ2aZ3A8B/6OpWO9ly8KAS7S/+ptPgVigAKBj+uIpARH0o/oGBIiJKAgMddZU4hopIqH5aROS45DrKiYi/f0hISorp0EDBoiNkicw7flyFW31UfMeOiStmTfP8cdu2/BpfPaebqMlnz8r9IvqK6dnArXAIAACKCBUpgdKnUiW9TH+ha3fqlN/j63K6hl5w4YLpecDtoQAAQBGj1jvGyzge0oWb4xcEAAAbogAAAGBDFAAAAGyIAgAAgA1RAAAAsCEKAAAANkQBAADAhigAAADYEAUAAAAbogAAAGBDFAAAAGyIAgAAgA1RAAAAsCEKAAAANkQBAADAhigAAADYEAUAAAAbogAAAGBDFAAAAGyIAgAAgA1RAAAAsCEKAAAANkQBAADAhigAAADYEAUAAAAbogAAAGBDFAAAAGyIAgAAgA1RAAAAsCEKAAAANkQBAADAhigAAADYEAUAAAAbogAAAGAnP0pTOXTuHAUAAAA7CZD2ampqKgUAAAAb0X31VGm+bJmr6SAAAMD5dJTMV69cuODm6trXxfHRRxQAAABsQB1TvR0zhg79qkFUlKf38eMcAgAAoAjSn8gmWeVwqCwprdqNGpXYIDra2zsq6trXWQEAAKAI0REyVKZt2aICHJ5W2REjErbPGe1xaN26619HAQAAwAmy3lQ/OD44ccLVX//TqvmPf+T5AB+qVervWVkyXzn0iBMnXLZZqxy/b90a5xNVu/qMlJRbfTsFAAAAJ1iePGd09RmnTslUGS0yaZLTBuomIhPu/Ns4BwAAABuiAAAAYEMUAAAAbIgCAACADVEAAACwIQoAAAA2RAEAAMCGKAAAANgQBQAAABuiAAAAYEMUAAAAbIgCAACADVEAAACwIQoAAAA2RAEAAMCGKAAAANgQBQAAABuiAAAAYEMUAAAAbIgCAACADVEAAACwIQoAAAA2RAEAAMCGKAAAANgQBQAAABuiAAAAirbZ8oKsvHzZdIyChgIAACjS9AfSWx4/csR0joKGAgAAKNJUcdVIVv7rX6ZzFDQUAABAkaQjZInMO348s9aVgaVaJCSYzlPQUAAAAEXTMpWjn3r99W/qzT9Zse3Fi6bjFDQUAAD/Q0dIZzVk7Vr9Lz3ceiIsTF/Qn1tDn3xSR7hYoh99VKLVFrW6Xj11v6SrOiEhslGWycpvvjGd+09VZZmUu3JFB0l5OTp7thqhH7A6deyYO0fedsmoXfvafljVLQ+965lnpKtupqaOHi0HJFM9k5xsOj7ukr+ESorWMl5dks5jxyZFRF/07rxokelYBZWr6QAACoA+Uls1PnXKUUr1V8N79VrmE13aI37lyj+/vlZE4kTER2ZJ3LV//PlnEdkjsmuXiIgMnD3bv03osJQKrVrpJvppeXnBAhUpgdKnUqX82g09Tx6Sz9avd4SKqDd69/66d8y7ni0OH/7/XjJZml7/XT//fPXPTZvC+oX1275t8uTjpXOmlvt6yBD5Tn0ih8ePl0qyTwa4uOTnjwR3YICUlP2HDzu8HPVlwuuvL6s553OvXV99ZTpWQUcBAOzsnPwqpzMyHHMcgTnPN226bNmc0jWGpabe7eYSB0XX8jq5Zk3HIS9VTn7q6acdb1sHLb9Nm2SM1NBJVao4bT9Oa1/ZmZRUIuz8wsxdL7wQuzT2xOMls7LudDNRs6Jm+TTMzhaRWSKTJvk/HJyQWi45WSeoaO21eLHqL02ljcXK6Q2oWdZy9UBKij6iG+mI2Ng8335H3Ukty8nR8VJK1zt2TC1x6aTu+/bbnMHui3If+eab5cnTi1ffeOWK6XkoLJS/f0hISorWpoMAyH+OBIl2eLZsuUzFqOrq22/zevv+X4f+M003bqyf1B87Pt64Mc/fQP/45KfKavfs43XrJjSbPblW6Pnzeb0ffgNDuqXMmjBBHZHS0mrkyLzefp4bohuLvPNOYsvZ/by8CkFeGEGTBeyopxyQmMREZ73xX5PYIfo1D/X997JWRqmlixfn9fb1LpUsWZGRznrjv6bEyeIvZK6cMEFKyhrV89dfnTUOkJ8oAIAN6YkqSOlPP823AYerr7TH/Pl5tr0/TvKzmjnqZJ9essTZ8WOXzOz6+JILF/RcPVM6Ll3q7PGA/EABAGxIL8pqkfPJ5s35NZ7L0ewvrU82bcqzDf5VWsiXP/7o7E/+17OeULmO1/JwPwCDKACADV2o4VHvl9MZGfk1XryapzzUuXOSJG/L1jy4J/sV+UXS8i//NbnT1HMuM06cyO9xAWegAAB28sd10utUpGqpcnLyffxJcl69mJ19r5vR7eWEhN/7du6UlSxHHZPzf1zAGSgAAADYEAUAAAAbogAAAGBDFADAhiJ0hNbawB3tKsku3fveb6mrvPUGNcPArXm7SqAaxy2BUTRQAAA7SZRo8VJqW2y6pEuFCvk1bFDgwMV7A0uXlsWyQsaWKnXPGxyjPpOf8i//nx7Tv0rPihXzfVzACSgAgA25/uSS60ht0CC/xstMv3yo5GN5ON5l8ZO5jz/e3nvQ14deLV48v/ZDhsp9+vunnsq38QAnogAANuQYKhdlRvfu+Tbg9y6R+pM8HO87eVcnly3rduLSk9Yzvr7Ojh8UGBS4N7BYMTmg98qjL7zg7PGA/EABAGxIPaeixaVHD7+WwSXTOtWr56xxOlTuVya1Y40a8qhOlOzg4Lzevv5EZqo+kZFXH+Pr5uas/cgMLnPB/aWBA+Ws6i9StaqzxgHyEwUAsKM/nm+vWqhNjnmxsZ1+6t3pp+nly+fV5tt7/23QoVfLlnWZ7HhNln/5pdSXxXp7sWJ5vh9fyHH9U506xx7I7V7O98MPRUS0ViqvNu/XI3hHcrkmTcRNPS0VJk7M8/yAQRQAwM7+LdPl1+rVc93cvi/WcNMm30+DT6RUqFPnbjcXsCF4WFrdmjVdI93vc4nauPHaG7Szd0Ptk4WyuV8//4eDE9Ie+OyzawXkbrfnFxlaKvmrbt3kfdXYenrVKpkmR+UBd3dn7weQn1xNBwBQALwuvvJgjRpWIymmntu5079dyK7UAwsWyDz1oryycKH7K1YT3Wrr1tglUbO8vH/7LWBD8LD90WXK6J1WiNuohg31Uf2LSPfuDneZqYv37au+kPv1T85bkr+h+ipeb+/Rw7WPe22Xxs8/7/d1SMXkY9OmubTKjVGX4uOz3iyjHB8cPLg8eXqH6jOuXOl8KizscJtKlbIP59bM+ahlSzVJhsiIsDDZrkPliRYtZLuI/tD0DwdwDuXvHxKSkqK16SAACoFGerIamZMjW9UwPdG18H6AKCr7cSNDdGORd95JbDm7n5fXyJGm46Bg4hAAgNtXVN4wi8p+APeAAgAAgA1RAAAAsCEKAAAANkQBAADAhigAAADYEAUAAAAbogAAAGBDlo6Qc6pbdrbpIACAvKFeUWVVRk6O6Rwo2CzlKiflYkaG6SAAgLyhq8rfZMDx46ZzoGCzdI5U1w02bzYdBACQN3KDrU7qh02bTOdAwWZZmbq89eOCBaaDAADujY6QaSK7d3/dddaSavLjj6bzoGCzEprNnuyxOyFBXpNtau6335oOBAC4Q/4SKilai+jvrcZvvCEiohQPecPN/ecqgLrKIY907y4d5Rn1bmqq6WAAgNvUXx5VmWPGJPnMbu1xatUq03FQOPxZABIfit7jGZaRkfOO43iuW+PGer6cVVNXrDAdEADw33SE7BT57Td1v6SrOiEhiTqmsmfA+PGmc6FwUbd6gf/00P0pFVq1ktL6OWnao4dMlqoS0qiRXqNjpVnFimqSlJcFbm6mdwQAipwf1dOy+9w5/a5MUhnp6fK9Xuf4cvly19Y5h7I/mj077rFP4x4bdPq06ZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAG/h9YTxULERwSNQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wOC0wM1QwODo0OTowNSswMDowMEZSoocAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDgtMDNUMDg6NDk6MDUrMDA6MDA3Dxo7AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIyLTA4LTAzVDA4OjQ5OjA1KzAwOjAwYBo75AAAAABJRU5ErkJggg=="
              alt="folder"
              height="70px"
              width="70px"
            />
            <h2>Unified Benefits</h2>
            <p>
              Link all healthcare benefits ranging form public health programmes
              to insurance shcemas to your unique ABHA number
            </p>
          </Grid>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/access.7430e6e5b114215818f8.png"
              alt="access"
              height="70px"
              width="70px"
            />
            <h2>Hassle-free Access</h2>
            <p>
              Avoid long lines for registration in healthcare facilities across
              the country
            </p>
          </Grid>
          <Grid item xs={5} sx={{ margin: "10px 30px", textAlign: "center" }}>
            <img
              src="https://www.paperplanetech.co/static/media/sign%20up.69d623eb74ee0a2f20ab.png"
              alt="signup"
              height="70px"
              width="70px"
            />
            <h2>Easy PHR Sign Up</h2>
            <p>
              Seamless sign up for PHR(Personal Health Records) applications
              such as ABDM ABHA application for Health data sharing
            </p>
          </Grid>
        </Grid>
        <Button
          sx={{
            color: "white",
            background: "rgb(117, 191, 99)",
            borderRadius: "20px",
            margin: "10px 40%",
          }}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=918707699762&text=Send+this+message+to+create+your+ABHA+Health+ID.&type=phone_number&app_absent=0"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Create abha id now &#62;
          </a>
        </Button>
      </Card>
      <TailBar />
    </div>
  );
}

export default ABHA;
