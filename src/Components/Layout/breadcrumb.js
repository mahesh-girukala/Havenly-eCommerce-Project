import Breadcrumb from 'react-bootstrap/Breadcrumb';

const HavenlyBreadcrumb = () => {
  const breadCrumbData = ['Home', 'Women', 'Men', 'Kids', 'Brands'];
  return (
    <Breadcrumb className="BF-Size">
      <Breadcrumb.Item href="#">{breadCrumbData[0]}</Breadcrumb.Item>
      <Breadcrumb.Item active>{breadCrumbData[1]}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default HavenlyBreadcrumb;