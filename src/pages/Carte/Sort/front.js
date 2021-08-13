import React, {useState, useEffect, useRef} from 'react';
import { Page, Container, Button, Icon, Menu, Modal, CardCarte, Grid, ButtonList, ButtonBack } from '../../../components';
import { Link } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import history from "../../../services/history.js";

let startSectionIndex
let endSectionIndex
let itemDraggingId
const CreateCarte = ({data, setData, company, apiFeedbak, apiLoaded, ...props}) => {
    useEffect(() => {
      if (apiLoaded && data.length === 0) {
        history.push('/admin/menu/start')
      }
    }, [apiLoaded])

  const [modal, setModal] = useState()
  const [mode, setMode] = useState('products')
  const [sectionDragData, setSectionDragData] = useState()
  let data1 = JSON.parse(JSON.stringify(data))

  const setSectionData = (d, i) => {
    const arr = [...data];
    arr[i]['items'] = d;
    setData(arr)
  }

  return (
    <Page className="Carte carte-sort" main={false}>

      <header className="carte-header">
        <Container center className="py-2">
          <Grid>
            <Grid.cell className="start-1_lg end-1_lg hide block_lg">
              <ButtonBack />
            </Grid.cell>
            <Grid.cell className="start-2_lg end-11_lg">
              <h4 className="mt-0 mb-2 hide block_lg">{company.name}</h4>
              <div className="flex-space-between">
                <ButtonBack className="hide_lg" />

                <ButtonList
                  onClick={setMode}
                  data={[
                    {label:'Produtos', value:'products'},
                    {label:'Seções', value:'sections'},
                  ]} />
              </div>
            </Grid.cell>
          </Grid>
        </Container>
      </header>

      <main className="carte-main">


        <Container center>
          <Grid>
            <Grid.cell className="start-2_lg end-11_lg">
            <p className="text-muted text-center text-left_lg">Clique e arraste para ordenar</p>

            {mode === 'products' &&
            <Grid>
              {data1.map((section, sectionIndex) => (
                <Grid.cell className="cell-6_lg" key={sectionIndex}>
                  <h5 className={section.active?'':'disabled'} key={sectionIndex} id={'section-'+sectionIndex}>
                    {section.name}
                  </h5>
                  <ReactSortable
                    className="cards-carte"
                    handle=".handle"
                    group={{name: 'section-'+sectionIndex, pull: true, put: true}}
                    list={section.items}
                    setList={d=> setSectionData(d, sectionIndex)}
                    onChange={e => {
                      endSectionIndex = sectionIndex;

                    }}
                    onStart={e => {
                      startSectionIndex = sectionIndex;
                      itemDraggingId = Number(e.item.getAttribute('data-item-id'));
                    }}
                    onEnd={e => {
                      if (startSectionIndex === endSectionIndex) {
                        let it = []
                        data1[endSectionIndex].items.forEach((t, i) => {
                          it.push(t.id)
                        });

                        props.sortItemsInSection({sectionId:data1[endSectionIndex].id, itemIds:it})
                      } else if(typeof endSectionIndex === 'number') {
                        props.sortItems({
                          startSectionId:data1[startSectionIndex].id,
                          endSectionId:data1[endSectionIndex].id,
                          itemId: itemDraggingId,
                          position: e.newIndex
                        })
                      }
                    }}
                  >
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="card-carte-drag" data-item-id={item.id}>
                        <CardCarte footer={false} data={{name: item.name, active: (item.active && section.active)}} />
                        <Icon name="drag" className="handle" />
                      </div>
                    ))}
                  </ReactSortable>
                </Grid.cell>
              ))}
            </Grid>
            }

            {mode === 'sections' &&
              <ReactSortable
                className="cards-carte"
                handle=".handle"
                group={{name: 'sections', pull: true, put: true}}
                list={data}
                setList={setData}
                onChange={e => {
                  // console.log('onChange sections', e);
                  setSectionDragData({
                    sectionId: Number(e.item.getAttribute('data-section-id')),
                    position: e.newIndex
                  })
                }}
                onEnd={e => {
                  props.sortSections(sectionDragData);
                }}
              >
                {data.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="card-carte-drag" data-section-id={section.id}>
                    <CardCarte footer={false} data={{name: section.name, active: section.active}} />
                    <Icon name="drag" className="handle" />
                  </div>
                ))}
              </ReactSortable>
            }

            </Grid.cell>
          </Grid>
        </Container>
      </main>

      <footer>
        <Menu menuHighlighter="menu" />
      </footer>

    </Page>
  );
}

export default CreateCarte;
