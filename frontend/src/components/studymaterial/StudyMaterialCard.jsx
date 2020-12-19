import React from 'react';
import { Link } from 'react-router-dom';

function StudyMaterialCard(material) {
  
  return (
            <tbody className="assignement-tbl-tbody">
              <tr>
                <th scope="row">{material.material.id}</th>
                <td>{material.material.user.name}</td>

                <td> {material.material.fileUrl ? <a href={material.material.fileUrl} target="_blank" rel="noreferrer">
                   {material.material.title} </a> : material.material.title }</td>
                <td>{material.material.grade}</td>
                <td>{material.material.subject}</td>
                <td>{material.material.postDate}</td>
                <td>
                    <Link className="btn-assignement-view" to={{ pathname: `/studymaterial/${material.material.id}`, state: { material } }}>
                        View 
                    </Link>
                </td>
              </tr>
            </tbody>
  );
}


export default StudyMaterialCard;
