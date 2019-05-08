import React from 'react'
import styled from 'styled-components'

import cats1 from '../../../assets/cats-1.jpg'
import cats2 from '../../../assets/cats-2.jpg'
import cats3 from '../../../assets/cats-3.jpg'

import Accordion from './Accordion'

const AccordionExample = ({ children }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <Accordion>
          <Accordion.Item title="How does airplane boarding work?">
            <div>
              <ul>
                <li className="toclevel-1 tocsection-1">
                  <a href="#Aviation">
                    <span className="tocnumber">1</span>{' '}
                    <span className="toctext">Aviation</span>
                  </a>
                  <ul>
                    <li className="toclevel-2 tocsection-2">
                      <a href="#Boarding_patterns_and_efficiency">
                        <span className="tocnumber">1.1</span>{' '}
                        <span className="toctext">
                          Boarding patterns and efficiency
                        </span>
                      </a>
                    </li>
                    <li className="toclevel-2 tocsection-3">
                      <a href="#Pre-boarding">
                        <span className="tocnumber">1.2</span>{' '}
                        <span className="toctext">Pre-boarding</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="toclevel-1 tocsection-4">
                  <a href="#Water_transport">
                    <span className="tocnumber">2</span>{' '}
                    <span className="toctext">Water transport</span>
                  </a>
                </li>
                <li className="toclevel-1 tocsection-5">
                  <a href="#Buses">
                    <span className="tocnumber">3</span>{' '}
                    <span className="toctext">Buses</span>
                  </a>
                </li>
                <li className="toclevel-1 tocsection-6">
                  <a href="#References">
                    <span className="tocnumber">4</span>{' '}
                    <span className="toctext">References</span>
                  </a>
                </li>
              </ul>
              <h2>
                <span className="mw-headline" id="Aviation">
                  Aviation
                </span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href="/w/index.php?title=Boarding_(transport)&action=edit&section=1"
                    title="Edit section: Aviation"
                  >
                    edit
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h2>
              <p>
                At commercial{' '}
                <a href="/wiki/Airport" title="Airport">
                  airports
                </a>
                , a <i>boarding call</i> on the public announcement system asks
                travelers to proceed to the departure gate and board the
                aircraft. This can begin any time from an hour to thirty minutes
                before departure (depending on the size of the plane and number
                of passengers). For boarding an aircraft,{' '}
                <a href="/wiki/Airstair" title="Airstair">
                  airstairs
                </a>{' '}
                or{' '}
                <a href="/wiki/Jetway" className="mw-redirect" title="Jetway">
                  jetways
                </a>{' '}
                are used. Small aircraft may carry their own stairs.
              </p>
              <p>
                Airlines control the access to the aircraft by checking
                passengers'{' '}
                <a href="/wiki/Boarding_pass" title="Boarding pass">
                  boarding passes
                </a>{' '}
                and matching them with the list of passengers and their
                identification cards. Many airlines use the IATA standard{' '}
                <i>
                  <a
                    href="/wiki/Bar_Coded_Boarding_Pass"
                    className="mw-redirect"
                    title="Bar Coded Boarding Pass"
                  >
                    Bar Coded Boarding Passes
                  </a>
                </i>{' '}
                (BCBP) to automate this process. A 2D bar code is scanned and
                the data are sent to the airline's system to look up the list of
                passengers. If the passenger is entitled to board, a positive
                message is sent back to the airline agent.
              </p>
              <p>
                Boarding in{' '}
                <a href="/wiki/Air_travel" title="Air travel">
                  air travel
                </a>{' '}
                is supervised by ground personnel. The pilot is responsible for
                the boarding as soon as the doors are closed because by law the
                aircraft is then "in flight".
                <sup id="cite_ref-1" className="reference">
                  <a href="#cite_note-1">[1]</a>
                </sup>
              </p>
              <p>
                After boarding, the{' '}
                <a href="/wiki/Taxiing" title="Taxiing">
                  taxiing
                </a>{' '}
                and{' '}
                <a href="/wiki/Takeoff" title="Takeoff">
                  takeoff
                </a>{' '}
                will follow in most cases.
              </p>
              <ul className="gallery mw-gallery-traditional">
                <li className="gallerybox" style={{ width: 155 }}>
                  <div style={{ width: 155 }}>
                    <div className="thumb" style={{ width: 150 }}>
                      <div style={{ margin: '38px auto' }}>
                        <a
                          href="/wiki/File:Cologne_Bonn_Airport_Terminal_C5.jpg"
                          className="image"
                        >
                          <img
                            alt
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cologne_Bonn_Airport_Terminal_C5.jpg/120px-Cologne_Bonn_Airport_Terminal_C5.jpg"
                            decoding="async"
                            width={120}
                            height={74}
                            srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cologne_Bonn_Airport_Terminal_C5.jpg/180px-Cologne_Bonn_Airport_Terminal_C5.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cologne_Bonn_Airport_Terminal_C5.jpg/240px-Cologne_Bonn_Airport_Terminal_C5.jpg 2x"
                            data-file-width={1811}
                            data-file-height={1119}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="gallerytext">
                      <p>
                        <a href="/wiki/Jet_bridge" title="Jet bridge">
                          Boarding bridge
                        </a>{' '}
                        to an aircraft via a jetway at the{' '}
                        <a
                          href="/wiki/Cologne_Bonn_Airport"
                          title="Cologne Bonn Airport"
                        >
                          Cologne Bonn Airport
                        </a>{' '}
                        in 2001.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="gallerybox" style={{ width: 155 }}>
                  <div style={{ width: 155 }}>
                    <div className="thumb" style={{ width: 150 }}>
                      <div style={{ margin: '30px auto' }}>
                        <a
                          href="/wiki/File:B737-500.Economycabin.jpg"
                          className="image"
                        >
                          <img
                            alt
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/B737-500.Economycabin.jpg/120px-B737-500.Economycabin.jpg"
                            decoding="async"
                            width={120}
                            height={90}
                            srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/B737-500.Economycabin.jpg/180px-B737-500.Economycabin.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f8/B737-500.Economycabin.jpg/240px-B737-500.Economycabin.jpg 2x"
                            data-file-width={2048}
                            data-file-height={1536}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="gallerytext">
                      <p>
                        Having boarded, passengers stow their cabin baggage -{' '}
                        <a href="/wiki/Lufthansa" title="Lufthansa">
                          Lufthansa
                        </a>{' '}
                        <a href="/wiki/Boeing_737" title="Boeing 737">
                          Boeing 737
                        </a>
                        -500.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <h3>
                <span
                  className="mw-headline"
                  id="Boarding_patterns_and_efficiency"
                >
                  Boarding patterns and efficiency
                </span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href="/w/index.php?title=Boarding_(transport)&action=edit&section=2"
                    title="Edit section: Boarding patterns and efficiency"
                  >
                    edit
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h3>
              <p>
                Most{' '}
                <a
                  href="/wiki/North_American"
                  className="mw-redirect"
                  title="North American"
                >
                  North American
                </a>{' '}
                airlines have assigned seating, but{' '}
                <a href="/wiki/Southwest_Airlines" title="Southwest Airlines">
                  Southwest Airlines
                </a>{' '}
                does not. Southwest boards passengers in A, B, and C groups
                depending on their ticket purchase date. Across North American
                airlines, it is standard to allow early boarding for passengers
                with mobility impairments, those with small children, and first
                class passengers.
                <sup id="cite_ref-guide_2-0" className="reference">
                  <a href="#cite_note-guide-2">[2]</a>
                </sup>{' '}
                All airlines allow passengers in premium cabins or with elite
                status to board earlier, with some offering it to coach
                customers for a fee.
              </p>
              <p>Several boarding patterns by seating location are possible:</p>
              <ul>
                <li>Back-to-front by row</li>
                <li>Outside-in by column (window, middle, aisle)</li>
                <li>
                  Block boarding (outside-in within a zone, with zones ordered
                  back-to-front)
                </li>
                <li>
                  Reverse pyramid (combines back-to-front with outside-in)
                </li>
                <li>
                  Rotating zone (alternating back-to-front and front-to-back
                  segments)
                </li>
                <li>Random</li>
              </ul>
              <p>
                Efficiency considerations to minimize overall boarding time
                include:
              </p>
              <ul>
                <li>
                  Whether passengers have to wait to pass other passengers in
                  the aisle
                </li>
                <li>
                  Whether passengers have to cross already-seated passengers in
                  aisle and middle seats
                </li>
                <li>
                  How many people can be storing luggage and taking their seats
                  at the same time
                </li>
              </ul>
              <p>Competing considerations include:</p>
              <ul>
                <li>
                  Encouraging specific behaviors (paying more, self-service,
                  checking in earlier, buying earlier)
                </li>
                <li>Whether families and friends can board together</li>
                <li>
                  Passenger stress with regard to who gets what seat and
                  competition for overhead bin space
                </li>
              </ul>
              <p>
                Computer simulations indicate that the outside-in and
                reverse-pyramid patterns should be fastest, followed by block
                and random, followed by back-to-front and rotating zone.
                <sup id="cite_ref-sim_3-0" className="reference">
                  <a href="#cite_note-sim-3">[3]</a>
                </sup>{' '}
                American Airlines found in a two-year study that randomized
                boarding was faster than outside-in.
                <sup id="cite_ref-npr_4-0" className="reference">
                  <a href="#cite_note-npr-4">[4]</a>
                </sup>{' '}
                Despite this, most North American airlines use the back-to-front
                pattern.
                <sup id="cite_ref-guide_2-1" className="reference">
                  <a href="#cite_note-guide-2">[2]</a>
                </sup>
                <sup id="cite_ref-sim_3-1" className="reference">
                  <a href="#cite_note-sim-3">[3]</a>
                </sup>
                <sup id="cite_ref-npr_4-1" className="reference">
                  <a href="#cite_note-npr-4">[4]</a>
                </sup>
              </p>
              <p>
                Another proposed method to speed boarding is to have passengers
                sort themselves by row and seat while still standing in the
                waiting area.
                <sup id="cite_ref-5" className="reference">
                  <a href="#cite_note-5">[5]</a>
                </sup>
              </p>
              <h3>
                <span className="mw-headline" id="Pre-boarding">
                  Pre-boarding
                </span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href="/w/index.php?title=Boarding_(transport)&action=edit&section=3"
                    title="Edit section: Pre-boarding"
                  >
                    edit
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h3>
              <p>
                As the process of controlling and verifying boarding passes and
                identity documents takes non-negligible amounts of time and as
                some airlines aim to reduce{' '}
                <a href="/wiki/Turnaround_time" title="Turnaround time">
                  turnaround times
                </a>
                , the process of "pre boarding" is increasingly employed. In
                this process, passengers enter a separate area after having
                their boarding pass inspected before the plane is ready to be
                boarded and once actual boarding commences passengers simply
                enter the plane.
              </p>
              <h2>
                <span className="mw-headline" id="Water_transport">
                  Water transport
                </span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href="/w/index.php?title=Boarding_(transport)&action=edit&section=4"
                    title="Edit section: Water transport"
                  >
                    edit
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h2>
              <p>
                In{' '}
                <a
                  href="/wiki/Water_transport"
                  className="mw-redirect"
                  title="Water transport"
                >
                  water transport
                </a>{' '}
                a boarding onto a{' '}
                <a href="/wiki/Watercraft" title="Watercraft">
                  watercraft
                </a>{' '}
                can be done while it is located in harbour or at sea.
              </p>
              <ul className="gallery mw-gallery-traditional">
                <li className="gallerybox" style={{ width: 155 }}>
                  <div style={{ width: 155 }}>
                    <div className="thumb" style={{ width: 150 }}>
                      <div style={{ margin: '15px auto' }}>
                        <a
                          href="/wiki/File:CBP_female_officers_going_aboard_a_ship.jpg"
                          className="image"
                        >
                          <img
                            alt
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CBP_female_officers_going_aboard_a_ship.jpg/80px-CBP_female_officers_going_aboard_a_ship.jpg"
                            decoding="async"
                            width={80}
                            height={120}
                            srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CBP_female_officers_going_aboard_a_ship.jpg/120px-CBP_female_officers_going_aboard_a_ship.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CBP_female_officers_going_aboard_a_ship.jpg/160px-CBP_female_officers_going_aboard_a_ship.jpg 2x"
                            data-file-width={2704}
                            data-file-height={4064}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="gallerytext">
                      <p>
                        Officers board a ship using a{' '}
                        <a
                          href="https://en.wiktionary.org/wiki/gangway"
                          className="extiw"
                          title="wikt:gangway"
                        >
                          gangway
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </li>
                <li className="gallerybox" style={{ width: 155 }}>
                  <div style={{ width: 155 }}>
                    <div className="thumb" style={{ width: 150 }}>
                      <div style={{ margin: '30px auto' }}>
                        <a
                          href="/wiki/File:Tourist_boat_at_sa_calobra_(majorca_spain)_arp.jpg"
                          className="image"
                        >
                          <img
                            alt
                            src="//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tourist_boat_at_sa_calobra_%28majorca_spain%29_arp.jpg/120px-Tourist_boat_at_sa_calobra_%28majorca_spain%29_arp.jpg"
                            decoding="async"
                            width={120}
                            height={90}
                            srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tourist_boat_at_sa_calobra_%28majorca_spain%29_arp.jpg/180px-Tourist_boat_at_sa_calobra_%28majorca_spain%29_arp.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tourist_boat_at_sa_calobra_%28majorca_spain%29_arp.jpg/240px-Tourist_boat_at_sa_calobra_%28majorca_spain%29_arp.jpg 2x"
                            data-file-width={1600}
                            data-file-height={1200}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="gallerytext">
                      <p>
                        Tourists board a boat in{' '}
                        <a
                          href="/wiki/Majorca"
                          className="mw-redirect"
                          title="Majorca"
                        >
                          Majorca
                        </a>{' '}
                        (
                        <a href="/wiki/Spain" title="Spain">
                          Spain
                        </a>
                        ) for a coastal trip from Sa Calobra to{' '}
                        <a
                          href="/wiki/Port_de_Soller"
                          className="mw-redirect"
                          title="Port de Soller"
                        >
                          Port de Soller
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <h2>
                <span className="mw-headline" id="Buses">
                  Buses
                </span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href="/w/index.php?title=Boarding_(transport)&action=edit&section=5"
                    title="Edit section: Buses"
                  >
                    edit
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h2>
              <p>
                Passengers board{' '}
                <a href="/wiki/Bus" title="Bus">
                  buses
                </a>{' '}
                in the United Kingdom by either indicating to the bus driver
                they want to board (by queueing at the bus stop or by holding
                out an arm) or by boarding when a bus has stopped at a bus
                station.
              </p>
              <p>
                Once on board passengers can either purchase a ticket for their
                journey or they can show a travel pass (such as an{' '}
                <a href="/wiki/Oyster_card" title="Oyster card">
                  Oyster card
                </a>{' '}
                when passengers travel on London buses).
              </p>
              <p>
                On long distance buses in Europe tickets are usually checked
                upon boarding whereas in Latin America fares or tickets are
                collected on the moving bus by an assistant to the driver.
              </p>
              <h2>
                <span className="mw-headline" id="References">
                  References
                </span>
                <span className="mw-editsection">
                  <span className="mw-editsection-bracket">[</span>
                  <a
                    href="/w/index.php?title=Boarding_(transport)&action=edit&section=6"
                    title="Edit section: References"
                  >
                    edit
                  </a>
                  <span className="mw-editsection-bracket">]</span>
                </span>
              </h2>
              <div className="reflist" style={{ listStyleType: 'decimal' }}>
                <div className="mw-references-wrap">
                  <ol className="references">
                    <li id="cite_note-1">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-1">^</a>
                        </b>
                      </span>{' '}
                      <span className="reference-text">
                        (Treaty of Tokyo 1964, Title III, Section 5 Chapter 2)
                      </span>
                    </li>
                    <li id="cite_note-guide-2">
                      <span className="mw-cite-backlink">
                        ^{' '}
                        <a href="#cite_ref-guide_2-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{' '}
                        <a href="#cite_ref-guide_2-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{' '}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://www.seatguru.com/articles/boarding_procedures.php"
                          >
                            "Guide to Airline Boarding Procedures"
                          </a>
                          <span className="reference-accessdate">
                            . Retrieved{' '}
                            <span className="nowrap">2011-10-02</span>
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=unknown&rft.btitle=Guide+to+Airline+Boarding+Procedures&rft_id=http%3A%2F%2Fwww.seatguru.com%2Farticles%2Fboarding_procedures.php&rfr_id=info%3Asid%2Fen.wikipedia.org%3ABoarding+%28transport%29"
                          className="Z3988"
                        />
                        <style
                          data-mw-deduplicate="TemplateStyles:r886058088"
                          dangerouslySetInnerHTML={{
                            __html:
                              '.mw-parser-output cite.citation{font-style:inherit}.mw-parser-output .citation q{quotes:"\\"""\\"""\'""\'"}.mw-parser-output .citation .cs1-lock-free a{background:url("//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png")no-repeat;background-position:right .1em center}.mw-parser-output .citation .cs1-lock-limited a,.mw-parser-output .citation .cs1-lock-registration a{background:url("//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lock-gray-alt-2.svg/9px-Lock-gray-alt-2.svg.png")no-repeat;background-position:right .1em center}.mw-parser-output .citation .cs1-lock-subscription a{background:url("//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lock-red-alt-2.svg/9px-Lock-red-alt-2.svg.png")no-repeat;background-position:right .1em center}.mw-parser-output .cs1-subscription,.mw-parser-output .cs1-registration{color:#555}.mw-parser-output .cs1-subscription span,.mw-parser-output .cs1-registration span{border-bottom:1px dotted;cursor:help}.mw-parser-output .cs1-ws-icon a{background:url("//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Wikisource-logo.svg/12px-Wikisource-logo.svg.png")no-repeat;background-position:right .1em center}.mw-parser-output code.cs1-code{color:inherit;background:inherit;border:inherit;padding:inherit}.mw-parser-output .cs1-hidden-error{display:none;font-size:100%}.mw-parser-output .cs1-visible-error{font-size:100%}.mw-parser-output .cs1-maint{display:none;color:#33aa33;margin-left:0.3em}.mw-parser-output .cs1-subscription,.mw-parser-output .cs1-registration,.mw-parser-output .cs1-format{font-size:95%}.mw-parser-output .cs1-kern-left,.mw-parser-output .cs1-kern-wl-left{padding-left:0.2em}.mw-parser-output .cs1-kern-right,.mw-parser-output .cs1-kern-wl-right{padding-right:0.2em}',
                          }}
                        />
                      </span>
                    </li>
                    <li id="cite_note-sim-3">
                      <span className="mw-cite-backlink">
                        ^{' '}
                        <a href="#cite_ref-sim_3-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{' '}
                        <a href="#cite_ref-sim_3-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{' '}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://menkes76.com/projects/boarding/boarding.htm"
                          >
                            "Airplane Board"
                          </a>
                          <span className="reference-accessdate">
                            . Retrieved{' '}
                            <span className="nowrap">2011-10-02</span>
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=unknown&rft.btitle=Airplane+Board&rft_id=http%3A%2F%2Fmenkes76.com%2Fprojects%2Fboarding%2Fboarding.htm&rfr_id=info%3Asid%2Fen.wikipedia.org%3ABoarding+%28transport%29"
                          className="Z3988"
                        />
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-npr-4">
                      <span className="mw-cite-backlink">
                        ^{' '}
                        <a href="#cite_ref-npr_4-0">
                          <sup>
                            <i>
                              <b>a</b>
                            </i>
                          </sup>
                        </a>{' '}
                        <a href="#cite_ref-npr_4-1">
                          <sup>
                            <i>
                              <b>b</b>
                            </i>
                          </sup>
                        </a>
                      </span>{' '}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="https://www.npr.org/2011/09/05/140191107/airlines-weigh-the-best-way-to-board"
                          >
                            "Airlines Weigh The Best Way To Board&nbsp;: NPR"
                          </a>
                          . 2011-09-05
                          <span className="reference-accessdate">
                            . Retrieved{' '}
                            <span className="nowrap">2011-10-02</span>
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=unknown&rft.btitle=Airlines+Weigh+The+Best+Way+To+Board+%3A+NPR&rft.date=2011-09-05&rft_id=https%3A%2F%2Fwww.npr.org%2F2011%2F09%2F05%2F140191107%2Fairlines-weigh-the-best-way-to-board&rfr_id=info%3Asid%2Fen.wikipedia.org%3ABoarding+%28transport%29"
                          className="Z3988"
                        />
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                    <li id="cite_note-5">
                      <span className="mw-cite-backlink">
                        <b>
                          <a href="#cite_ref-5">^</a>
                        </b>
                      </span>{' '}
                      <span className="reference-text">
                        <cite className="citation web">
                          <a
                            rel="nofollow"
                            className="external text"
                            href="http://the-flying-carpet.com/"
                          >
                            "The 'FLYING CARPET' / The fastest way to fill a
                            plane / Round Peg Innovations Pty Ltd"
                          </a>
                          <span className="reference-accessdate">
                            . Retrieved{' '}
                            <span className="nowrap">2014-03-28</span>
                          </span>
                          .
                        </cite>
                        <span
                          title="ctx_ver=Z39.88-2004&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&rft.genre=unknown&rft.btitle=The+%27FLYING+CARPET%27+%2F+The+fastest+way+to+fill+a+plane+%2F+Round+Peg+Innovations+Pty+Ltd&rft_id=http%3A%2F%2Fthe-flying-carpet.com%2F&rfr_id=info%3Asid%2Fen.wikipedia.org%3ABoarding+%28transport%29"
                          className="Z3988"
                        />
                        <link
                          rel="mw-deduplicated-inline-style"
                          href="mw-data:TemplateStyles:r886058088"
                        />
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </Accordion.Item>
          <Accordion.Item title="What do cats look like?">
            <CatImg src={cats1} />
            <CatImg src={cats2} />
            <CatImg src={cats3} />
          </Accordion.Item>
          <Accordion.Item title="Foo">Bar</Accordion.Item>
        </Accordion>
      </Wrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f3fc;
  overflow: scroll;
`

const Wrapper = styled.div`
  width: 500px;
`

const CatImg = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export default AccordionExample
