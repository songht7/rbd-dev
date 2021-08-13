<template>
  <div id="Page-main">
    <Head></Head>
    <div id="Page-container">
      <div id="Home" class="page-block">
        <b-container fluid="xl">
        <div class="silde-box">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            fade
            controls
            indicators
            background="#ababab"
            img-width="800"
            img-height="400"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              caption=""
              text=""
              img-src="http://www.jobpgroup.com/img/1.jpg"
            ></b-carousel-slide>

            <b-carousel-slide img-src="http://www.jobpgroup.com/img/2.jpg">
              <h1></h1>
            </b-carousel-slide>

            <b-carousel-slide
              img-src="http://www.jobpgroup.com/img/3.jpg"
            ></b-carousel-slide>

            <!-- <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
              img-src="http://www.jobpgroup.com/img/2.jpg"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide> -->

            <!-- <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide> -->
          </b-carousel>
        </div>
        </b-container>
      </div>

      <div class="page-block block-bg">
        <b-container fluid="xl">
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                RBD group is a professional third-party quality technical
                service company, committed to providing customers with
                professional inspection and quality technical services, and
                reduce the risk of product use in the client. From the
                standpoint of the third party, adhere to the fairness and
                objectivity of quality.
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                Founded in 2013, located in Wuxi, China, the economic center of
                Jiangsu Province as the center, the company has established 5
                operation center cover over China, including East, Central,
                Southwest, Northwest and North of China operation centers, with
                services covering all parts of the country. The company adopts
                strict management operation mode, strictly controls each link,
                and can provide professional quality service in the shortest
                notice period according to the needs of customers, and can
                complete it efficiently
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <div class="temp-row">
                  Now RBD offers a complete range of one-stop Inspection, Audit,
                  Lab testing,Certification and Consulting services.Besides, RBD
                  also could support you to solves the quality issues at your
                  client's site and ensure the quality of your goods and the
                  reliability of your supplier. RBD was focusing on providing
                  quality solutions in the Automobile and parts industry filed,
                  and Electronics, Medical device, Aerospace, Train, Ship, and
                  other manufacturing industry. In automotive industry, the
                  products we RBD inspect as below:
                  <p>
                    1. Car, Truck, Bus, Engineering Vehicle, motorbike, etc.
                  </p>
                  <p>2. Engine & parts</p>
                  <p>3. Transmission & part, gearbox</p>
                  <p>4. Braking system</p>
                  <p>5. Steering system</p>
                  <p>6. Suspension system</p>
                  <p>7. Car electric products</p>
                  <p>8. Battery, tyre, glass, seats, etc</p>
                </div>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                Now RBD set up a professional quality team for 3rd party
                inspection in industry and articles for daily use, including
                textile, clothing, shoes and hats, box package, furniture,
                Sports equipment, outdoor products, ornaments, kitchen utensils,
                Gas & Oil industry equipment, Mine & trans machining, Train &
                ship equipment, Port & steel structure and other industry
                equipment.
              </template>
            </b-jumbotron>
          </b-row>
              <b-row class="brow">
                <b-col cols="4">
                  <img
                    src="@img/23.jpg"
                    class="col-img col-img-full align-top"
                    alt="rbd group"
                  />
                </b-col>
                <b-col cols="4">
                  <img
                    src="@img/20.jpg"
                    class="col-img col-img-full align-top"
                    alt="rbd group"
                  />
                </b-col>
                <b-col cols="4">
                  <img
                    src="@img/22.jpg"
                    class="col-img col-img-full align-top"
                    alt="rbd group"
                  />
                </b-col>
              </b-row>
        </b-container>
      </div>

      <div class="page-block" id="Integrity">
        <b-container fluid="xl">
          <div class="form-box">
            <b-row class="brow">
              <b-col>
                <b-jumbotron>
                  <template v-slot:lead>
                    <div class="temp-row">
                      <p>
                        INTEGRITY & SAFETY DECLARATION
                      </p>
                    </div>
                  </template>
                </b-jumbotron>
              </b-col>
            </b-row>
            <b-row class="brow">
              <b-col>
                <!-- <img
                  src="@img/g.png"
                  class="col-img col-img-full align-top"
                  alt="rbd group"
                /> -->
                <b-jumbotron>
                  <template v-slot:lead>
                    <div class="temp-row">
                      <p class="line-lg">
                        At RBD we run documented in house training programs and
                        have a culture of zero tolerance for bribery and
                        corruption. Any complaints received on potential bribery
                        will be undergone with independent investigation. Every
                        new RBD employee undergoes detailed induction training
                        and we have an annual compliance program for all
                        employees. Integrity is one of the most important RBD
                        Core Values and cultures of the whole company.
                      </p>

                      <p class="line-lg">
                        Company policy for Suppliers & Factories – INTEGRITY &
                        SAFETY DECLARATION
                      </p>

                      <p>INTEGRITY</p>
                      <p>
                        In order to ensure our reliable & professional services
                        to be delivered to the clients, all suppliers and
                        factories should understand and support that the
                        following policies are being enforced in our team:
                      </p>
                      <p>●</p>
                      <p>
                        All our employees are forbidden to ask for or accept
                        tips, presents, rebate or entertainment of any kinds.
                        All inspector’s and auditor’s expense such as
                        transportation cost, hotel accommodation are reimbursed
                        by RBD Technical Service Limited directly.
                      </p>
                      <p>●</p>
                      <p class="line-lg">
                        Any attempts of bribery to the inspectors / auditors by
                        any person of the manufacturing factory or a member of
                        management will be reported and the clients will be
                        informed by our company immediately. If evidence of a
                        bribery is proven, RBD reserves the rights to pursue
                        both the briber and bribe legally including, but not
                        limited to, the reimbursement of any cost incurred and
                        the loss of business caused to RBD.
                      </p>

                      <p class="line-lg">
                        Any kind of violation of privacy or intimidation against
                        the inspectors / auditors will be reported and the
                        clients will be informed immediately.
                      </p>
                      <p>●</p>

                      <p class="line-lg">
                        Should any RBD employee violate this policy, please
                        immediately report to Shane Lyu, at (+86) 186 0297 4630
                        or email to xin.lv@RBDgroup.com.cn
                      </p>

                      <p>SAFETY</p>
                      <p>
                        To deliver our services to clients in the most efficient
                        manner, RBD staff safety needs to be ensured. RBD in
                        partnership with the client should ensure the work
                        (inspection) site is safe; check: ( √ or X below)
                      </p>
                      <p>
                        o The area is free from hazardous traffic and forklift
                        movement
                      </p>
                      <p>
                        o There is adequate lighting and space to perform
                        inspections
                      </p>
                      <p>
                        o Work at heights is minimized or performed safely on
                        appropriate ladders
                      </p>
                      <p>o No other hazards are creating a risk to RBD staff</p>
                      <p class="line-lg">
                        Where risks have been identified, proposed safety
                        controls should be listed below (e.g. Staff to wear high
                        visibility clothes where a traffic hazard exists):
                      </p>
                      <p>
                        _____________________________________________________________________
                      </p>
                      <p  class="line-lg">
                        _____________________________________________________________________
                      </p>
                      <p>
                        NOTE: Where either the client or the inspector/auditor
                        feels that the unacceptable potential safety risks
                        associated with the work activities these should be
                        escalated to the relevant RBD manager prior to the work
                        commencing.
                      </p>
                    </div>
                  </template>
                </b-jumbotron>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>

      <div class="page-block block-bg" id="Flow">
        <b-container fluid="xl">
          <div class="form-box">
            <b-row class="brow">
              <b-col>
                <b-jumbotron>
                  <template v-slot:header
                    >Inspection Arrangement Flow
                  </template>
                  <!-- <template v-slot:lead>
                    <div class="temp-row">
                      <p>Inspection Arrangement Flow</p>
                    </div>
                  </template> -->
                </b-jumbotron>
              </b-col>
            </b-row>
            <b-row class="brow">
              <b-col>
                <img
                  src="@img/tree.png"
                  class="col-img col-img-full align-top"
                  alt="rbd group"
                />
              </b-col>
            </b-row>
          </div>
        </b-container>
      </div>

      <div id="Contact" class="page-block">
        <b-container fluid="xl">
          <ContactUs></ContactUs>
        </b-container>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs";
var MobileDetect = require("mobile-detect"),
  md = new MobileDetect(navigator.userAgent);
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      AuditorCols1: 4,
      AuditorCols2: 8,
    };
  },
  components: {
    ContactUs,
  },
  mounted() {
    // this.getAuthority();
    var that = this;
    //console.log(md.mobile());
    if (md.mobile()) {
      that.cols = 12;
      that.AuditorCols1 = 12;
      that.AuditorCols2 = 12;
    } else {
      that.AuditorCols1 = 4;
      that.AuditorCols2 = 8;
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss"></style>
