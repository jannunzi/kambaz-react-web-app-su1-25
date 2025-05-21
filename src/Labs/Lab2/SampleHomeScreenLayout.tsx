export default function SampleHomeScreenLayout() {
  return (
    <div>
      <div className="d-block d-md-none wd-bg-color-red">Header</div>

      <div className="d-flex">
        <div className="wd-bg-color-red d-none d-md-block">Kambaz Nav</div>
        <div className="wd-bg-color-green d-none d-md-block">Course Nav</div>
        <div className="wd-bg-color-blue">Modules</div>
        <div className="wd-bg-color-yellow d-none d-lg-block">
          Course Status
        </div>
      </div>
    </div>
  );
}
