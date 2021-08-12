<template>
  <div id="Page-main">
    <Head></Head>
    <div id="Page-container">
      <div id="Home" class="page-block">
        <!-- <b-container fluid="xl"> -->
        <div class="silde-box">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            fade
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              caption=""
              text=""
              img-src="http://www.jobpgroup.com/img/4.jpg"
            ></b-carousel-slide>

            <b-carousel-slide img-src="http://www.jobpgroup.com/img/2.jpg">
              <h1></h1>
            </b-carousel-slide>

            <b-carousel-slide
              img-src="http://www.jobpgroup.com/img/1.jpg"
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
        <!-- </b-container> -->
      </div>

      <div id="Services" class="page-block">
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
        </b-container>
      </div>

      <div class="page-block block-bg">
        <b-container fluid="xl">
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:header
                >RBD can provide TPI services in China and Southeast Asia, as
                follow:
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>SA/FA - Supplier Audit/Factory Audit On-site:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="4">
              <img
                src="@img/1.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="4">
              <img
                src="@img/2.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="4">
              <img
                src="@img/3.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                Product quality issues are a topic of wide concern for consumers
                and other stakeholders, and environmental and social
                responsibility is valued as never before by stakeholders,
                including investors. Buyers need to seek a sustainable strategy
                while pursuing the benefits they receive in all aspects of the
                company and its suppliers. QST factory audit services provide
                companies with a one-stop comprehensive audit and training
                program including quality management, production capacity
                assessment, and supply chain security. Ensure that your products
                and services meet all relevant regulations and standards,
                improve the efficiency and performance of your supply chain,
                reduce redundant audit fatigue, and enable your company to grow
                sustainably.
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>Auditor visit supplier face to face:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="4">
              <img src="@img/4.jpg" class="col-img align-top" alt="rbd group" />
            </b-col>
            <b-col cols="8">
              <b-jumbotron>
                <template v-slot:lead>
                  <div class="temp-row">
                    <p class="line-lg">
                      A. Basic info: Factory's building, area, workers, staffs,
                      production lines, Equipment,
                    </p>
                    <p class="line-lg">
                      B.Documents: Business Licence, Export Certificates etc
                    </p>
                    <p class="line-lg">
                      C. Production Ability: factory's production lines, output
                      ability.R&D ability
                    </p>
                    <p class="line-lg">
                      D. QC system: Check the quality control system, Quality
                      control process, records etc
                    </p>
                    <p class="line-lg">
                      E. Production process: check the production process
                      inworkshop
                    </p>
                    <p class="line-lg">
                      F. Products: Check products quality, Function, package,
                      sample show room etc
                    </p>
                  </div>
                </template>
              </b-jumbotron>
            </b-col>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>IPC  Initial production check:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="6">
              <img
                src="@img/5.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="6">
              <img
                src="@img/6.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                Initial production inspections check the quality of parts,
                materials and products at the beginning of production to
                anticipate risks and prevent waste of resources. Our consultants
                can use IPC as a one-time product verification or as part of a
                broader quality assurance and quality improvement program
                implemented. Our solutions will ensure quality standards are met
                throughout the entire production process, from concept design to
                merchandising, and quality improvement programs provide
                solutions to any problems that arise.
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>IPC  Initial production check:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="4">
              <img src="@img/7.jpg" class="col-img align-top" alt="rbd group" />
            </b-col>
            <b-col cols="4">
              <img src="@img/8.jpg" class="col-img align-top" alt="rbd group" />
            </b-col>
            <b-col cols="4">
              <img src="@img/9.jpg" class="col-img align-top" alt="rbd group" />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                Our RBD inspection service is on-site at 15% to 50% of your
                merchandise, assessing samples according to regulations,
                standards and contractual agreements, indicating actual or
                potential defects so that you can resolve them immediately and
                will verify Incorporate a broader quality assurance and quality
                improvement program to ensure that quality production meets
                regulatory requirements.
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>FRI: Final random inspection</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="3">
              <img
                src="@img/10.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="3">
              <img
                src="@img/11.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="3">
              <img
                src="@img/12.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="3">
              <img
                src="@img/13.jpg"
                class="col-img col-img-full  align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                Quality engineer according to client requirement performed
                product quantity, export carton ,inner box,gift box,product size
                and weight check; furthermore, ensure that the packaged product
                meets the requirements of the guest and does not violate the
                policies and regulations of the country in which it is located.
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>PSI -Pre-shipping Inspection:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="6">
              <img
                src="@img/14.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="6">
              <img
                src="@img/15.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <div class="temp-row">
                  Inspector visit factory to check products from below area:
                  <p>1. Account order quantity if ready and correct</p>
                  <p>
                    2. Check package, print, logo, label. sticker, marks, bar
                    code, shipping mark
                  </p>
                  <p>
                    3. Check products appearance, finishing, outlook, artwork
                    and pick out defects
                  </p>
                  <p>4. Do the related basic function test, operate test</p>
                  <p>5. Check the special required point of clients asked</p>
                  <p>6. Take video about products outlook and function</p>
                </div>
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>CLI-Container Loading Check:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="6">
              <img
                src="@img/16.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="6">
              <img
                src="@img/17.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <div class="temp-row">
                  <p>
                    Check the whole Loading process,Ensure Full quantity and
                    right products loaded,  and inspector left only after the
                    container Locked and truck left.
                  </p>
                  <p>
                    Container loading supervision services are designed to
                    ensure that products are shipped and properly protected,
                    whether by container, ship or truck. Container loading
                    inspections may include verification of external and
                    internal working conditions of the container, debris of
                    trailers or containers, inspection of insects and pest
                    cleanliness, shipping marks for legal compliance, and
                    documentation of any damage found during loading. Documents
                    for containers, vessels and seal labels and photographed the
                    packaging and loading process. Once the loading is
                    completed, the lead lock cabinet is used at the customer's
                    special request to reduce the risk of tampering, theft and
                    dispensing.
                  </p>
                </div>
              </template>
            </b-jumbotron>
          </b-row>

          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <p>Supply Chain Consulting Services:</p>
              </template>
            </b-jumbotron>
          </b-row>
          <b-row class="brow">
            <b-col cols="6">
              <img
                src="@img/18.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
            <b-col cols="6">
              <img
                src="@img/19.jpg"
                class="col-img col-img-full align-top"
                alt="rbd group"
              />
            </b-col>
          </b-row>
          <b-row class="brow">
            <b-jumbotron>
              <template v-slot:lead>
                <div class="temp-row">
                  <p>
                    We RBD can recommend more excellent supplier in your product
                    based on our more 8 years in TPI services experience and
                    clients’ & supplier date.
                  </p>
                </div>
              </template>
            </b-jumbotron>
          </b-row>
        </b-container>
      </div>

      <div class="page-block" id="Promise">
        <b-container fluid="xl">
          <div class="form-box">
            <b-row class="brow">
              <b-col>
                <b-jumbotron>
                  <template v-slot:lead>
                    <div class="temp-row">
                      <p>
                        We grantee our inspection is Independently and
                        professionally, If approved our inspection is not
                        correct, Max refund 2 times inspection cost
                      </p>
                    </div>
                  </template>
                </b-jumbotron>
              </b-col>
            </b-row>
            <b-row class="brow">
              <b-col>
                <img
                  src="@img/g.png"
                  class="col-img col-img-full align-top"
                  alt="rbd group"
                />
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
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    ContactUs,
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
