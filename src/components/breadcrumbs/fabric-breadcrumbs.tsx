import { Breadcrumbs } from '@fabric-ds/react';

const FabricBreadcrumbs = () => {
  return (
    <>
      <Breadcrumbs>
        <a href="#/url/1">Eiendom</a>
        <a href="#/url/2">Bolig til salgs</a>
        <a href="#/url/3" aria-current="page">
          Oslo
        </a>
      </Breadcrumbs>
      <Breadcrumbs>
        <a href="#/url/1">This is a superduper long breadcrumb</a>
        <a href="#/url/2">Just to</a>
        <a href="#/url/3">Check how</a>
        <a href="#/url/4">It looks</a>
        <a href="#/url/5">Like</a>
        <a href="#/url/3" aria-current="page">
          Is it ugly?
        </a>
      </Breadcrumbs>
    </>
  )
}

export default FabricBreadcrumbs;
